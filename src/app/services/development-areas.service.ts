import { Injectable, signal } from '@angular/core';
import { Feature } from '../models';

@Injectable({ providedIn: 'root' })
export class DevelopmentAreasService {
  private readonly _areas = signal<Feature[]>([
    { icon: '📐', title: 'Academic Excellence', description: 'A strong foundation across every subject, built one concept at a time.' },
    { icon: '🗣️', title: 'Communication Skills', description: 'Clear, confident expression in both speaking and writing.' },
    { icon: '💪', title: 'Confidence Building', description: 'Encouragement that helps every child believe in their own abilities.' },
    { icon: '🎨', title: 'Creativity', description: 'Room to imagine, explore and express ideas beyond the textbook.' },
    { icon: '⏰', title: 'Discipline', description: 'Healthy routines and habits that support learning for life.' },
    { icon: '🧠', title: 'Critical Thinking', description: 'Learning to ask questions, reason and think independently.' },
    { icon: '🧩', title: 'Problem Solving', description: 'Practical skills to break down challenges and find solutions.' },
    { icon: '🌟', title: 'Leadership Skills', description: 'Opportunities to take initiative and guide others with confidence.' },
    { icon: '🤝', title: 'Social Skills', description: 'Teamwork, empathy and respect built through group learning.' },
    { icon: '✅', title: 'Good Habits', description: 'Everyday practices that build responsibility and self-discipline.' },
    { icon: '🌱', title: 'Personality Development', description: 'Growth into well-rounded, self-assured young individuals.' },
    { icon: '💡', title: 'Positive Learning Attitude', description: 'A genuine love for learning that lasts well beyond the classroom.' },
  ]);

  readonly areas = this._areas.asReadonly();
}
