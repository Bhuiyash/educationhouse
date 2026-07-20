import { Component, OnInit, inject } from '@angular/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title';
import { TestimonialCarouselComponent } from '../../shared/components/testimonial-carousel/testimonial-carousel';
import { ButtonComponent } from '../../shared/components/button/button';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { TestimonialsService } from '../../services/testimonials.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-testimonials',
  imports: [SectionTitleComponent, TestimonialCarouselComponent, ButtonComponent, RevealOnScrollDirective],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class TestimonialsComponent implements OnInit {
  private readonly testimonialsService = inject(TestimonialsService);
  private readonly seo = inject(SeoService);

  protected readonly testimonials = this.testimonialsService.testimonials;

  // // Placeholder Google Business Profile links — replace YOUR_GOOGLE_PLACE_ID with the real Place ID.
  // readonly googleReviewsUrl = 'https://search.google.com/local/reviews?placeid=YOUR_GOOGLE_PLACE_ID';
  // readonly writeReviewUrl = 'https://search.google.com/local/writereview?placeid=YOUR_GOOGLE_PLACE_ID';

  ngOnInit(): void {
    this.seo.update(
      'Testimonials',
      'Read real Google reviews from parents and students about their experience at Education House.',
    );
  }
}
