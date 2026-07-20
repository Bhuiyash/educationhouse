import { Component, OnInit, inject } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title';
import { StatCounterComponent } from '../../shared/components/stat-counter/stat-counter';
import { FeatureCardComponent } from '../../shared/components/feature-card/feature-card';
import { CourseCardComponent } from '../../shared/components/course-card/course-card';
import { TestimonialCardComponent } from '../../shared/components/testimonial-card/testimonial-card';
import { FaqAccordionComponent } from '../../shared/components/faq-accordion/faq-accordion';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { StatsService } from '../../services/stats.service';
import { FeaturesService } from '../../services/features.service';
import { CoursesService } from '../../services/courses.service';
import { TestimonialsService } from '../../services/testimonials.service';
import { FaqService } from '../../services/faq.service';
import { SeoService } from '../../services/seo.service';
import { Course, Faq, Testimonial } from '../../models';

@Component({
  selector: 'app-home',
  imports: [
    ButtonComponent,
    SectionTitleComponent,
    StatCounterComponent,
    FeatureCardComponent,
    CourseCardComponent,
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
  private readonly coursesService = inject(CoursesService);
  private readonly testimonialsService = inject(TestimonialsService);
  private readonly faqService = inject(FaqService);
  private readonly seo = inject(SeoService);

  protected readonly stats = this.statsService.stats;
  protected readonly features = this.featuresService.features;
  protected readonly testimonials = this.testimonialsService.testimonials;

  protected get popularCourses(): Course[] {
    return this.coursesService.courses().slice(0, 6);
  }

  protected get featuredTestimonials(): Testimonial[] {
    return this.testimonials().slice(0, 3);
  }

  protected get topFaqs(): Faq[] {
    return this.faqService.faqs().slice(0, 5);
  }

  ngOnInit(): void {
    this.seo.update(
      'Home',
      'Education House is a premier education consultancy offering IELTS/PTE coaching, career counselling and study abroad guidance for Canada, Australia, UK, USA, Germany and Ireland.',
    );
  }
}
