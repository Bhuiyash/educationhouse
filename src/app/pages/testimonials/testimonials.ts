import { Component, OnInit, inject } from '@angular/core';
import { TestimonialCardComponent } from '../../shared/components/testimonial-card/testimonial-card';
import { ButtonComponent } from '../../shared/components/button/button';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { TestimonialsService } from '../../services/testimonials.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-testimonials',
  imports: [TestimonialCardComponent, ButtonComponent, RevealOnScrollDirective],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class TestimonialsComponent implements OnInit {
  private readonly testimonialsService = inject(TestimonialsService);
  private readonly seo = inject(SeoService);

  protected readonly testimonials = this.testimonialsService.testimonials;

  ngOnInit(): void {
    this.seo.update(
      'Testimonials',
      'Read what parents say about their children’s growth and learning experience at Education House.',
    );
  }
}
