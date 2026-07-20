import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { FaqAccordionComponent } from '../../shared/components/faq-accordion/faq-accordion';
import { ButtonComponent } from '../../shared/components/button/button';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { FaqService } from '../../services/faq.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-faq',
  imports: [FaqAccordionComponent, ButtonComponent, RevealOnScrollDirective],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class FaqComponent implements OnInit {
  private readonly faqService = inject(FaqService);
  private readonly seo = inject(SeoService);

  private readonly allFaqs = this.faqService.faqs;
  protected readonly activeCategory = signal('All');

  protected readonly categories = computed(() => ['All', ...new Set(this.allFaqs().map((f) => f.category))]);

  protected readonly filteredFaqs = computed(() => {
    const category = this.activeCategory();
    return category === 'All' ? this.allFaqs() : this.allFaqs().filter((f) => f.category === category);
  });

  ngOnInit(): void {
    this.seo.update(
      'FAQ',
      'Find answers to frequently asked questions about classes, batches and enrollment at Education House.',
    );
  }

  setCategory(category: string): void {
    this.activeCategory.set(category);
  }
}
