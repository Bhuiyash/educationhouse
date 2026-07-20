import { Injectable, signal } from '@angular/core';
import { Course } from '../models';

@Injectable({ providedIn: 'root' })
export class CoursesService {
  private readonly _courses = signal<Course[]>([
    {
      slug: 'ielts',
      title: 'IELTS Preparation',
      category: 'Test Preparation',
      image: 'https://picsum.photos/seed/eh-ielts/640/440',
      description:
        'Intensive coaching covering Listening, Reading, Writing and Speaking modules, taught by certified trainers using authentic Cambridge material.',
      duration: '6 Weeks',
      eligibility: 'Open to all, Class 10 pass or above',
      highlights: ['Mock tests every week', 'Speaking practice with native-level trainers', 'Band score guarantee program'],
    },
    {
      slug: 'pte',
      title: 'PTE Academic',
      category: 'Test Preparation',
      image: 'https://picsum.photos/seed/eh-pte/640/440',
      description:
        'Computer-based test training with AI-scored mock exams, template strategies and personalised score improvement plans.',
      duration: '4 Weeks',
      eligibility: 'Open to all, Class 10 pass or above',
      highlights: ['Unlimited scored mock tests', 'Personalised study plan', 'Fast-track batches available'],
    },
    {
      slug: 'spoken-english',
      title: 'Spoken English',
      category: 'Language Skills',
      image: 'https://picsum.photos/seed/eh-spoken/640/440',
      description:
        'Confidence-building program focused on fluency, pronunciation, grammar and everyday conversation for personal and professional growth.',
      duration: '8 Weeks',
      eligibility: 'Open to all age groups',
      highlights: ['Small batch sizes', 'Real-life conversation practice', 'Certificate on completion'],
    },
    {
      slug: 'personality-development',
      title: 'Personality Development',
      category: 'Soft Skills',
      image: 'https://picsum.photos/seed/eh-personality/640/440',
      description:
        'A holistic course covering communication, body language, interview skills, and confidence building for career readiness.',
      duration: '4 Weeks',
      eligibility: 'Open to students & working professionals',
      highlights: ['Mock interviews', 'Group discussion practice', 'Corporate etiquette training'],
    },
    {
      slug: 'computer-courses',
      title: 'Computer Courses',
      category: 'Technical Skills',
      image: 'https://picsum.photos/seed/eh-computer/640/440',
      description:
        'Foundational to advanced computer literacy including MS Office, internet tools, and basic digital skills for the modern workplace.',
      duration: '6 Weeks',
      eligibility: 'Open to all, no prior experience needed',
      highlights: ['Hands-on lab sessions', 'Industry-relevant curriculum', 'Certificate on completion'],
    },
    {
      slug: 'study-abroad-guidance',
      title: 'Study Abroad Guidance',
      category: 'Counselling',
      image: 'https://picsum.photos/seed/eh-guidance/640/440',
      description:
        'One-on-one counselling to shortlist universities and courses abroad based on your academic profile, budget and career goals.',
      duration: 'Ongoing Support',
      eligibility: 'Class 12 pass or above',
      highlights: ['Free profile evaluation', 'University shortlisting', 'Application & SOP assistance'],
    },
    {
      slug: 'visa-assistance',
      title: 'Visa Assistance',
      category: 'Counselling',
      image: 'https://picsum.photos/seed/eh-visa/640/440',
      description:
        'End-to-end visa filing support including documentation, financial planning, mock interviews and embassy submission.',
      duration: 'Ongoing Support',
      eligibility: 'Applicants with a confirmed offer letter',
      highlights: ['Document checklist & review', 'Mock visa interviews', 'High visa success rate'],
    },
  ]);

  readonly courses = this._courses.asReadonly();

  getBySlug(slug: string): Course | undefined {
    return this._courses().find((c) => c.slug === slug);
  }
}
