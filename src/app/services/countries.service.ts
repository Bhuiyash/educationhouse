import { Injectable, signal } from '@angular/core';
import { Country } from '../models';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private readonly _countries = signal<Country[]>([
    {
      slug: 'canada',
      name: 'Canada',
      flagEmoji: '🇨🇦',
      image: 'https://picsum.photos/seed/eh-canada/700/500',
      tagline: 'Affordable, welcoming and packed with post-study work opportunities.',
      benefits: ['Post-graduation work permit up to 3 years', 'Pathway to permanent residency', 'Affordable tuition compared to US/UK'],
      requirements: ['IELTS 6.0+ or PTE 58+', 'Statement of Purpose', 'Proof of funds (GIC)'],
      universities: ['University of Toronto', 'University of British Columbia', 'McGill University', 'Conestoga College'],
    },
    {
      slug: 'australia',
      name: 'Australia',
      flagEmoji: '🇦🇺',
      image: 'https://picsum.photos/seed/eh-australia/700/500',
      tagline: 'World-class education with a relaxed lifestyle and strong job market.',
      benefits: ['Post-study work visa up to 4 years', 'High quality of life', 'Wide range of scholarships'],
      requirements: ['IELTS 6.5+ or PTE 64+', 'GTE Statement', 'Confirmation of Enrolment (CoE)'],
      universities: ['University of Melbourne', 'University of Sydney', 'Monash University', 'UNSW Sydney'],
    },
    {
      slug: 'uk',
      name: 'United Kingdom',
      flagEmoji: '🇬🇧',
      image: 'https://picsum.photos/seed/eh-uk/700/500',
      tagline: 'Home to some of the world’s oldest and most prestigious universities.',
      benefits: ['2-year post-study Graduate Route visa', 'One-year master’s programs', 'Globally recognised degrees'],
      requirements: ['IELTS 6.5+ or PTE 59+', 'CAS letter', 'Financial evidence for tuition & living costs'],
      universities: ['University of Oxford', 'University of Manchester', 'King’s College London', 'University of Leeds'],
    },
    {
      slug: 'usa',
      name: 'United States',
      flagEmoji: '🇺🇸',
      image: 'https://picsum.photos/seed/eh-usa/700/500',
      tagline: 'Unmatched research opportunities and the world’s largest student community.',
      benefits: ['Optional Practical Training (OPT) up to 3 years', 'Flexible curriculum & majors', 'Top-ranked global universities'],
      requirements: ['IELTS 6.5+ or TOEFL 80+', 'SOP & Letters of Recommendation', 'I-20 & SEVIS fee payment'],
      universities: ['Arizona State University', 'University of Illinois', 'Northeastern University', 'SUNY Buffalo'],
    },
    {
      slug: 'germany',
      name: 'Germany',
      flagEmoji: '🇩🇪',
      image: 'https://picsum.photos/seed/eh-germany/700/500',
      tagline: 'Low or no tuition fees at top-ranked public universities.',
      benefits: ['Little to no tuition fees', '18-month post-study job search visa', 'Strong engineering & tech programs'],
      requirements: ['IELTS 6.0+ or German B1/B2', 'Blocked account proof', 'APS certificate'],
      universities: ['TU Munich', 'RWTH Aachen', 'University of Stuttgart', 'TU Berlin'],
    },
    {
      slug: 'ireland',
      name: 'Ireland',
      flagEmoji: '🇮🇪',
      image: 'https://picsum.photos/seed/eh-ireland/700/500',
      tagline: 'A thriving tech hub in Europe with generous stay-back options.',
      benefits: ['2-year stay-back visa for master’s graduates', 'Home to EU HQs of major tech firms', 'English-speaking environment'],
      requirements: ['IELTS 6.5+ or PTE 63+', 'Letter of offer', 'Proof of funds'],
      universities: ['Trinity College Dublin', 'University College Dublin', 'University of Galway', 'Dublin City University'],
    },
  ]);

  readonly countries = this._countries.asReadonly();

  getBySlug(slug: string): Country | undefined {
    return this._countries().find((c) => c.slug === slug);
  }
}
