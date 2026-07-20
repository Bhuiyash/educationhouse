import { Injectable, signal } from '@angular/core';
import { Founder } from '../models';

@Injectable({ providedIn: 'root' })
export class FoundersService {
  private readonly _founders = signal<Founder[]>([
    {
      name: 'Parul Srivastava',
      role: 'Co-Founder',
      experience: '25+ Years of Teaching Experience',
      photo: 'https://picsum.photos/seed/eh-founder-parul/480/560',
      description:
        'A passionate educator dedicated to nurturing young minds through personalised teaching, discipline, confidence building, and academic excellence.',
    },
    {
      name: 'Ravindra Srivastava',
      role: 'Co-Founder',
      experience: '25+ Years of Teaching Experience',
      photo: 'https://picsum.photos/seed/eh-founder-ravindra/480/560',
      description:
        'An experienced mentor committed to helping every child discover their potential through quality education, strong values, concept clarity, and continuous encouragement.',
    },
  ]);

  readonly founders = this._founders.asReadonly();
}
