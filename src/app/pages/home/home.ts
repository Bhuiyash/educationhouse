import { Component, OnInit, inject } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title';
import { StatCounterComponent } from '../../shared/components/stat-counter/stat-counter';
import { FeatureCardComponent } from '../../shared/components/feature-card/feature-card';
import { OfferCardComponent } from '../../shared/components/offer-card/offer-card';
import { TestimonialCardComponent } from '../../shared/components/testimonial-card/testimonial-card';
import { FaqAccordionComponent } from '../../shared/components/faq-accordion/faq-accordion';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { StatsService } from '../../services/stats.service';
import { FeaturesService } from '../../services/features.service';
import { OffersService } from '../../services/offers.service';
import { DevelopmentAreasService } from '../../services/development-areas.service';
import { TestimonialsService } from '../../services/testimonials.service';
import { FaqService } from '../../services/faq.service';
import { SeoService } from '../../services/seo.service';
import { Faq, Testimonial } from '../../models';

@Component({
  selector: 'app-home',
  imports: [
    ButtonComponent,
    SectionTitleComponent,
    StatCounterComponent,
    FeatureCardComponent,
    OfferCardComponent,
    TestimonialCardComponent,
    FaqAccordionComponent,
    RevealOnScrollDirective,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit {
  private readonly statsService = inject(StatsService);
  private readonly featuresService = inject(FeaturesService);
  private readonly offersService = inject(OffersService);
  private readonly developmentAreasService = inject(DevelopmentAreasService);
  private readonly testimonialsService = inject(TestimonialsService);
  private readonly faqService = inject(FaqService);
  private readonly seo = inject(SeoService);

  protected readonly stats = this.statsService.stats;
  protected readonly features = this.featuresService.features;
  protected readonly offers = this.offersService.offers;
  protected readonly developmentAreas = this.developmentAreasService.areas;
  protected readonly testimonials = this.testimonialsService.testimonials;

  protected get featuredTestimonials(): Testimonial[] {
    return this.testimonials().slice(0, 3);
  }

  protected get topFaqs(): Faq[] {
    return this.faqService.faqs().slice(0, 5);
  }

  ngOnInit(): void {
    this.seo.update(
      'Home',
      'Education House is a coaching institute in Lucknow providing quality education for Class 1 to Class 8, focused on academic excellence and overall child development.',
    );
  }
}
