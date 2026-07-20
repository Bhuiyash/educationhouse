import { Injectable, signal } from '@angular/core';
import { Testimonial } from '../models';

/**
 * Real Google Business reviews for Education House.
 * Text has been lightly cleaned up for readability; meaning is unchanged.
 */
@Injectable({ providedIn: 'root' })
export class TestimonialsService {
  private readonly _testimonials = signal<Testimonial[]>([
    {
      id: 1,
      name: 'Abhi Sharma',
      rating: 5,
      relativeTime: '1 year ago',
      text: 'I’ve had a great experience with Education House. The teachers are patient, supportive, and ensure every student understands concepts clearly. The study material is well-structured, and regular tests help students track their progress and improve consistently.',
    },
    {
      id: 2,
      name: 'Utkarsh Dwivedi',
      rating: 5,
      relativeTime: '1 year ago',
      text: 'I had a wonderful experience at Education House. The institute offers well-structured learning with a focused approach. The teachers are highly supportive, creating an environment where students feel motivated and confident.',
    },
    {
      id: 3,
      name: 'Prakhar Katiyar',
      rating: 5,
      relativeTime: '5 months ago',
      text: 'Excellent teachers, a positive learning environment, and proper care for every student. The syllabus is completed on time, and regular weekly tests help students perform better.',
    },
    {
      id: 4,
      name: 'Harshit Singh',
      rating: 5,
      relativeTime: '1 year ago',
      text: 'Education House provides quality education through experienced teachers, engaging teaching methods, and a practical learning approach. The supportive environment helps students grow academically and personally.',
    },
    {
      id: 5,
      name: 'Bhaskar Singh',
      rating: 5,
      relativeTime: '5 months ago',
      text: 'I still remember attending tuition here in Class 8. I struggled with Mathematics and Physics, but the guidance I received at Education House helped me achieve the goals I had set for myself.',
    },
    {
      id: 6,
      name: 'Yatharth Dixit',
      rating: 5,
      relativeTime: '1 year ago',
      text: 'My experience at Education House has been excellent. The teachers explain concepts using simple tricks and techniques that are extremely helpful during exams, making learning both effective and enjoyable.',
    },
    {
      id: 7,
      name: 'Faiz Alam',
      rating: 5,
      relativeTime: '1 year ago',
      text: 'Excellent teaching and outstanding support. The teachers are hardworking and give personal attention to every student, ensuring no one is left behind.',
    }
  ]);

  readonly testimonials = this._testimonials.asReadonly();
}
