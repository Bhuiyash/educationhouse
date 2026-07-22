import { Injectable, signal } from '@angular/core';
import { Stat } from '../models';

@Injectable({ providedIn: 'root' })
export class StatsService {
  private readonly _stats = signal<Stat[]>([
    { value: 25, suffix: '+', label: 'Years of Teaching Experience', icon: '📚' },
    { value: 10000, suffix: '+', label: 'Students Guided', icon: '🎓' },
    { value: 98, suffix: '%', label: 'Parent Satisfaction', icon: '💬' },
    { value: 10, suffix: '', label: 'Classes Covered (1–10)', icon: '🏫' },
    { value: 100, suffix: '%', label: 'Personal Attention', icon: '🤝' },
  ]);

  readonly stats = this._stats.asReadonly();
}
