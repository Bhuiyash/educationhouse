import { Component, input } from '@angular/core';
import { Testimonial } from '../../../models';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.html',
  styleUrl: './testimonial-card.css',
})
export class TestimonialCardComponent {
  readonly testimonial = input.required<Testimonial>();

  get stars(): number[] {
    return Array.from({ length: 5 }, (_, i) => i);
  }
}
