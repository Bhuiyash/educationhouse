import { Component, OnInit, inject } from '@angular/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title';
import { StatCounterComponent } from '../../shared/components/stat-counter/stat-counter';
import { ButtonComponent } from '../../shared/components/button/button';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { StatsService } from '../../services/stats.service';
import { SeoService } from '../../services/seo.service';

interface Value {
  icon: string;
  title: string;
  description: string;
}

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [SectionTitleComponent, StatCounterComponent, ButtonComponent, RevealOnScrollDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent implements OnInit {
  private readonly statsService = inject(StatsService);
  private readonly seo = inject(SeoService);

  protected readonly stats = this.statsService.stats;

  readonly values: Value[] = [
    { icon: '🎯', title: 'Integrity', description: 'We give honest, student-first advice — never pushing a university or country because of a commission.' },
    { icon: '💡', title: 'Excellence', description: 'From our trainers to our counsellors, we hold every service to the highest standard of quality.' },
    { icon: '🤝', title: 'Empathy', description: 'Every student’s journey is different, and we take the time to understand yours before we advise.' },
    { icon: '🚀', title: 'Growth', description: 'We invest continuously in our team, our curriculum and our technology to serve you better.' },
  ];

  readonly timeline: TimelineItem[] = [
    { year: '2011', title: 'Education House Founded', description: 'Started as a small IELTS coaching centre with a single classroom and a big vision.' },
    { year: '2014', title: 'Study Abroad Division Launched', description: 'Expanded into university counselling and visa assistance for Canada and Australia.' },
    { year: '2017', title: 'Crossed 5,000 Students', description: 'Reached a major milestone in students mentored across test prep and counselling.' },
    { year: '2020', title: 'Online Learning Platform', description: 'Launched hybrid classes to continue supporting students through the pandemic.' },
    { year: '2023', title: '25+ University Partnerships', description: 'Formed direct partnerships with universities across six countries.' },
    { year: '2026', title: '12,000+ Students Mentored', description: 'Today, we continue to help students achieve their global education dreams.' },
  ];

  ngOnInit(): void {
    this.seo.update(
      'About Us',
      'Learn about Education House — our mission, vision, values, history and the team dedicated to guiding students toward global education success.',
    );
  }
}
