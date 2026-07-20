import { Injectable, signal } from '@angular/core';
import { Faq } from '../models';

@Injectable({ providedIn: 'root' })
export class FaqService {
  private readonly _faqs = signal<Faq[]>([
    {
      id: 1,
      category: 'Admissions',
      question: 'What documents do I need to start my study abroad application?',
      answer:
        'You typically need academic transcripts, a valid passport, English proficiency scores (IELTS/PTE), a statement of purpose, letters of recommendation and proof of funds. Our counsellors provide a personalised checklist during your first consultation.',
    },
    {
      id: 2,
      category: 'Admissions',
      question: 'How early should I start my university application process?',
      answer:
        'We recommend starting at least 8-12 months before your intended intake to allow enough time for test preparation, university shortlisting, application submission and visa processing.',
    },
    {
      id: 3,
      category: 'Courses',
      question: 'Are IELTS and PTE classes conducted online or offline?',
      answer:
        'We offer both online and in-centre batches for all our test preparation courses, so you can choose whichever format suits your schedule and learning style.',
    },
    {
      id: 4,
      category: 'Courses',
      question: 'Do you offer a money-back guarantee if I don’t achieve my target band score?',
      answer:
        'Yes, our IELTS band score guarantee program includes complimentary extra classes and mock tests until you reach your target score, at no additional cost.',
    },
    {
      id: 5,
      category: 'Visa',
      question: 'What is your visa success rate?',
      answer:
        'Education House maintains a visa success rate of over 95% across Canada, Australia, the UK, the USA, Germany and Ireland, thanks to thorough documentation review and mock interviews.',
    },
    {
      id: 6,
      category: 'Visa',
      question: 'Can you help with education loans and financial documentation?',
      answer:
        'Yes, we partner with leading banks and NBFCs to help you secure education loans, and our team assists in preparing all financial documents required for your visa application.',
    },
    {
      id: 7,
      category: 'Fees',
      question: 'Is the university and visa counselling service free?',
      answer:
        'Our initial profile evaluation and university shortlisting consultation is completely free. Service fees, if any, are discussed transparently before you commit to any paid service.',
    },
    {
      id: 8,
      category: 'Fees',
      question: 'Do you offer instalment options for course fees?',
      answer:
        'Yes, we offer flexible instalment plans for all our test preparation and skill development courses. Speak to our front desk for the current plans available.',
    },
  ]);

  readonly faqs = this._faqs.asReadonly();
}
