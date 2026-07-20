import { Component, computed, input } from '@angular/core';
import { Testimonial } from '../../../models';

const AVATAR_PALETTE = ['#0b5ed7', '#d98307', '#16a34a', '#9333ea', '#dc2626', '#0891b2'];

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.html',
  styleUrl: './testimonial-card.css',
})
export class TestimonialCardComponent {
  readonly testimonial = input.required<Testimonial>();

  protected readonly stars = [0, 1, 2, 3, 4];

  protected readonly initials = computed(() => {
    const parts = this.testimonial().name.trim().split(/\s+/);
    const first = parts[0]?.[0] ?? '';
    const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
    return (first + last).toUpperCase();
  });

  protected readonly avatarColor = computed(() => {
    const name = this.testimonial().name;
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return AVATAR_PALETTE[Math.abs(hash) % AVATAR_PALETTE.length];
  });
}
