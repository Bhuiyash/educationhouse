import { AfterViewInit, Component, ElementRef, OnDestroy, input, signal, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Stat } from '../../../models';

@Component({
  selector: 'app-stat-counter',
  imports: [DecimalPipe],
  templateUrl: './stat-counter.html',
  styleUrl: './stat-counter.css',
})
export class StatCounterComponent implements AfterViewInit, OnDestroy {
  readonly stat = input.required<Stat>();

  protected readonly displayValue = signal(0);

  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;
  private frameId?: number;

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;

    if (typeof IntersectionObserver === 'undefined') {
      this.displayValue.set(this.stat().value);
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.animateCount();
            this.observer?.unobserve(element);
          }
        }
      },
      { threshold: 0.4 },
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.frameId !== undefined) {
      cancelAnimationFrame(this.frameId);
    }
  }

  private animateCount(): void {
    const target = this.stat().value;
    const duration = 1600;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.displayValue.set(Math.round(eased * target));

      if (progress < 1) {
        this.frameId = requestAnimationFrame(step);
      }
    };

    this.frameId = requestAnimationFrame(step);
  }
}
