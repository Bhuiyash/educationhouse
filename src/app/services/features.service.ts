import { Injectable, signal } from '@angular/core';
import { Feature } from '../models';

@Injectable({ providedIn: 'root' })
export class FeaturesService {
  private readonly _features = signal<Feature[]>([
    {
      icon: '👩‍🏫',
      title: 'Certified Trainers',
      description: 'Learn from IELTS/PTE certified trainers with over a decade of classroom and online teaching experience.',
    },
    {
      icon: '🧭',
      title: 'End-to-End Guidance',
      description: 'From university shortlisting to visa filing, we support you at every single step of your journey.',
    },
    {
      icon: '📊',
      title: 'Proven Track Record',
      description: 'Over 12,000 students mentored with a 95% visa success rate across six countries.',
    },
    {
      icon: '💳',
      title: 'Transparent Pricing',
      description: 'No hidden charges. Every fee is discussed upfront with flexible instalment options available.',
    },
    {
      icon: '🤝',
      title: 'Personalised Counselling',
      description: 'One-on-one sessions tailored to your academic profile, budget and career aspirations.',
    },
    {
      icon: '🏆',
      title: 'Scholarship Support',
      description: 'We help you identify and apply for scholarships that can significantly reduce your tuition costs.',
    },
  ]);

  readonly features = this._features.asReadonly();
}
