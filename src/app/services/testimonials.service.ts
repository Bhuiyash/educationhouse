import { Injectable, signal } from '@angular/core';
import { Testimonial } from '../models';

@Injectable({ providedIn: 'root' })
export class TestimonialsService {
  private readonly _testimonials = signal<Testimonial[]>([
    {
      id: 1,
      name: 'Ananya Sharma',
      photo: 'https://picsum.photos/seed/eh-student-1/160/160',
      course: 'IELTS Preparation',
      rating: 5,
      quote:
        'The trainers at Education House pushed me from a band 6 to a band 8 in just six weeks. The mock tests felt exactly like the real exam.',
      outcome: 'Scored Band 8, now studying at University of Toronto',
    },
    {
      id: 2,
      name: 'Rohit Verma',
      photo: 'https://picsum.photos/seed/eh-student-2/160/160',
      course: 'Study Abroad Guidance',
      rating: 5,
      quote:
        'From shortlisting universities to writing my SOP, the counsellors guided me through every single step without any pressure to pick a "package" university.',
      outcome: 'Admitted to University of Melbourne',
    },
    {
      id: 3,
      name: 'Fatima Khan',
      photo: 'https://picsum.photos/seed/eh-student-3/160/160',
      course: 'PTE Academic',
      rating: 4,
      quote:
        'The unlimited mock tests and instant AI scoring helped me understand exactly where I was losing points. Highly recommend the PTE batch.',
      outcome: 'Scored 79 overall on PTE Academic',
    },
    {
      id: 4,
      name: 'Aditya Rao',
      photo: 'https://picsum.photos/seed/eh-student-4/160/160',
      course: 'Visa Assistance',
      rating: 5,
      quote:
        'My visa interview prep session was incredibly detailed. They anticipated almost every question the visa officer asked me.',
      outcome: 'Visa approved in 2 weeks for Germany',
    },
    {
      id: 5,
      name: 'Sneha Iyer',
      photo: 'https://picsum.photos/seed/eh-student-5/160/160',
      course: 'Spoken English',
      rating: 5,
      quote:
        'I joined as a shy speaker and left as someone who can confidently present in front of a room. The small batch size made all the difference.',
      outcome: 'Promoted to Team Lead at work',
    },
    {
      id: 6,
      name: 'Karan Mehta',
      photo: 'https://picsum.photos/seed/eh-student-6/160/160',
      course: 'Personality Development',
      rating: 4,
      quote:
        'The mock interview sessions were brutally honest and exactly what I needed before my campus placements.',
      outcome: 'Placed at a leading MNC',
    },
  ]);

  readonly testimonials = this._testimonials.asReadonly();
}
