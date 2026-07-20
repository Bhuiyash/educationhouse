import { Injectable, signal } from '@angular/core';
import { Testimonial } from '../models';

@Injectable({ providedIn: 'root' })
export class TestimonialsService {
  private readonly _testimonials = signal<Testimonial[]>([
    {
      id: 1,
      name: 'Meera Agarwal',
      photo: 'https://picsum.photos/seed/eh-parent-1/160/160',
      relation: 'Parent of a Class 5 Student',
      rating: 5,
      quote:
        'My daughter’s confidence in English has improved tremendously. She now reads and speaks without hesitation, and it shows in her school results too.',
      highlight: 'Noticeably more confident in class',
    },
    {
      id: 2,
      name: 'Sanjay Tiwari',
      photo: 'https://picsum.photos/seed/eh-parent-2/160/160',
      relation: 'Parent of a Class 3 Student',
      rating: 5,
      quote:
        'The teachers genuinely care about every child. They know my son by name, understand how he learns best, and keep me updated after every session.',
      highlight: 'Personal attention that actually shows',
    },
    {
      id: 3,
      name: 'Priya Singh',
      photo: 'https://picsum.photos/seed/eh-parent-3/160/160',
      relation: 'Parent of a Class 7 Student',
      rating: 5,
      quote:
        'The small batches ensure every student receives individual attention. My daughter never felt lost in a crowd like she did at her previous tuition.',
      highlight: 'Small batches, real individual attention',
    },
    {
      id: 4,
      name: 'Ravi Shukla',
      photo: 'https://picsum.photos/seed/eh-parent-4/160/160',
      relation: 'Parent of a Class 2 Student',
      rating: 5,
      quote:
        'We have seen significant improvement in both academics and confidence. Education House feels less like a tuition centre and more like a second classroom that cares.',
      highlight: 'Stronger grades and a happier child',
    },
    {
      id: 5,
      name: 'Anjali Verma',
      photo: 'https://picsum.photos/seed/eh-parent-5/160/160',
      relation: 'Parent of a Class 8 Student',
      rating: 5,
      quote:
        'The regular progress updates help us stay involved in our son’s learning. He looks forward to his classes every single day, which says a lot.',
      highlight: 'Learning our child actually enjoys',
    },
    {
      id: 6,
      name: 'Deepak Mishra',
      photo: 'https://picsum.photos/seed/eh-parent-6/160/160',
      relation: 'Parent of a Class 4 Student',
      rating: 5,
      quote:
        'From homework support to spoken English practice, everything is handled with so much patience. It has made a real difference to my daughter’s discipline and habits.',
      highlight: 'Better discipline and study habits',
    },
  ]);

  readonly testimonials = this._testimonials.asReadonly();
}
