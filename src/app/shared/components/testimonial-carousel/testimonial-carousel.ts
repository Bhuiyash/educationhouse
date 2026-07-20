import { AfterViewInit, Component, ElementRef, OnDestroy, input, signal, viewChild } from '@angular/core';
import { Testimonial } from '../../../models';
import { TestimonialCardComponent } from '../testimonial-card/testimonial-card';

@Component({
  selector: 'app-testimonial-carousel',
  imports: [TestimonialCardComponent],
  templateUrl: './testimonial-carousel.html',
  styleUrl: './testimonial-carousel.css',
})
export class TestimonialCarouselComponent implements AfterViewInit, OnDestroy {
  readonly testimonials = input.required<Testimonial[]>();

  private readonly track = viewChild.required<ElementRef<HTMLElement>>('track');

  protected readonly activeIndex = signal(0);

  private scrollRafId?: number;
  private readonly handleScroll = (): void => {
    if (this.scrollRafId !== undefined) return;
    this.scrollRafId = requestAnimationFrame(() => {
      this.scrollRafId = undefined;
      this.syncActiveIndex();
    });
  };

  ngAfterViewInit(): void {
    this.track().nativeElement.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  ngOnDestroy(): void {
    this.track().nativeElement.removeEventListener('scroll', this.handleScroll);
    if (this.scrollRafId !== undefined) {
      cancelAnimationFrame(this.scrollRafId);
    }
  }

  scrollPrev(): void {
    this.scrollToIndex(Math.max(0, this.activeIndex() - 1));
  }

  scrollNext(): void {
    this.scrollToIndex(Math.min(this.testimonials().length - 1, this.activeIndex() + 1));
  }

  scrollToIndex(index: number): void {
    const el = this.track().nativeElement;
    const slide = el.querySelectorAll<HTMLElement>('.carousel__slide').item(index);
    if (!slide) return;
    el.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' });
    this.activeIndex.set(index);
  }

  private syncActiveIndex(): void {
    const el = this.track().nativeElement;
    const slides = el.querySelectorAll<HTMLElement>('.carousel__slide');
    if (!slides.length) return;

    let closest = 0;
    let closestDistance = Infinity;
    slides.forEach((slide, index) => {
      const distance = Math.abs(slide.offsetLeft - el.scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = index;
      }
    });
    this.activeIndex.set(closest);
  }
}
