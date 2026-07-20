import { Component, input, signal } from '@angular/core';
import { Faq } from '../../../models';

@Component({
  selector: 'app-faq-accordion',
  templateUrl: './faq-accordion.html',
  styleUrl: './faq-accordion.css',
})
export class FaqAccordionComponent {
  readonly faqs = input.required<Faq[]>();

  private readonly openIds = signal<Set<number>>(new Set());

  isOpen(id: number): boolean {
    return this.openIds().has(id);
  }

  toggle(id: number): void {
    const next = new Set(this.openIds());
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    this.openIds.set(next);
  }

  trackById(_index: number, faq: Faq): number {
    return faq.id;
  }
}
