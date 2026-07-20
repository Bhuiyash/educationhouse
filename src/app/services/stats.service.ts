import { Injectable, signal } from '@angular/core';
import { Stat } from '../models';

@Injectable({ providedIn: 'root' })
export class StatsService {
  private readonly _stats = signal<Stat[]>([
    { value: 12000, suffix: '+', label: 'Students Mentored', icon: '🎓' },
    { value: 25, suffix: '+', label: 'Partner Universities', icon: '🏛️' },
    { value: 6, suffix: '', label: 'Countries Covered', icon: '🌍' },
    { value: 95, suffix: '%', label: 'Visa Success Rate', icon: '✅' },
  ]);

  readonly stats = this._stats.asReadonly();
}
