import { Component, OnInit, inject } from '@angular/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title';
import { StatCounterComponent } from '../../shared/components/stat-counter/stat-counter';
import { FounderCardComponent } from '../../shared/components/founder-card/founder-card';
import { ButtonComponent } from '../../shared/components/button/button';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { StatsService } from '../../services/stats.service';
import { FoundersService } from '../../services/founders.service';
import { SeoService } from '../../services/seo.service';

interface Value {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [SectionTitleComponent, StatCounterComponent, FounderCardComponent, ButtonComponent, RevealOnScrollDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent implements OnInit {
  private readonly statsService = inject(StatsService);
  private readonly foundersService = inject(FoundersService);
  private readonly seo = inject(SeoService);

  protected readonly stats = this.statsService.stats;
  protected readonly founders = this.foundersService.founders;

  readonly values: Value[] = [
    { icon: '🎯', title: 'Integrity', description: 'We give honest, child-first guidance to every family that walks through our doors.' },
    { icon: '💡', title: 'Excellence', description: 'From our teachers to our study material, we hold every part of learning to a high standard.' },
    { icon: '🤝', title: 'Empathy', description: 'Every child learns differently, and we take the time to understand each one before we teach.' },
    { icon: '🚀', title: 'Growth', description: 'We invest continuously in our teachers, our methods and our classrooms to serve every child better.' },
  ];

  ngOnInit(): void {
    this.seo.update(
      'About Us',
      'Learn about Education House in Lucknow — our mission, founders and values, and our commitment to the overall development of students from Class 1 to Class 10.',
    );
  }
}
