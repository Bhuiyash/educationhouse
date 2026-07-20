import { Injectable, signal } from '@angular/core';
import { Faq } from '../models';

@Injectable({ providedIn: 'root' })
export class FaqService {
  private readonly _faqs = signal<Faq[]>([
    {
      id: 1,
      category: 'Classes',
      question: 'What classes do you teach?',
      answer:
        'We provide quality education exclusively for students from Class 1 to Class 8, with teaching adapted to each child’s age and learning level.',
    },
    {
      id: 2,
      category: 'Classes',
      question: 'What subjects are covered?',
      answer:
        'We cover all core school subjects along with dedicated English language classes focused on grammar, vocabulary, reading, writing and spoken confidence.',
    },
    {
      id: 3,
      category: 'Support',
      question: 'Do you provide homework support?',
      answer:
        'Yes, our school tuition program includes daily homework support, doubt clearing and regular practice to reinforce what is taught in school.',
    },
    {
      id: 4,
      category: 'Batches',
      question: 'How many students are there in one batch?',
      answer:
        'We intentionally keep our batches small so that every child receives genuine individual attention from our teachers.',
    },
    {
      id: 5,
      category: 'Support',
      question: 'How do parents receive progress updates?',
      answer:
        'Our teachers share regular updates on academic performance, behaviour and areas of improvement, so parents stay closely involved in their child’s learning.',
    },
    {
      id: 6,
      category: 'Classes',
      question: 'Do you teach spoken English?',
      answer:
        'Yes, spoken English and communication confidence are a core part of our English Language Classes, alongside grammar, reading and writing.',
    },
    {
      id: 7,
      category: 'Enrollment',
      question: 'How can I enroll my child?',
      answer:
        'Simply reach out through our contact form, call us, or visit our centre in Lucknow. Our team will help you choose the right batch for your child.',
    },
  ]);

  readonly faqs = this._faqs.asReadonly();
}
