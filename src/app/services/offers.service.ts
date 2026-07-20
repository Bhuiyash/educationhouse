import { Injectable, signal } from '@angular/core';
import { Offer } from '../models';

@Injectable({ providedIn: 'root' })
export class OffersService {
  private readonly _offers = signal<Offer[]>([
    {
      icon: '🗣️',
      title: 'English Language Classes',
      tagline: 'Building fluent, confident communicators',
      items: ['Vocabulary', 'Grammar', 'Speaking Skills', 'Reading', 'Writing', 'Pronunciation', 'Communication Confidence'],
    },
    {
      icon: '📖',
      title: 'School Tuition',
      tagline: 'For students from Class 1 to Class 8',
      items: ['Homework Support', 'Daily Practice', 'Individual Attention', 'Strong Concept Building', 'Exam Preparation', 'Revision Sessions', 'Doubt Clearing', 'Regular Assessments'],
    },
  ]);

  readonly offers = this._offers.asReadonly();
}
