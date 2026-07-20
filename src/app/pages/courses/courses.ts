import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CourseCardComponent } from '../../shared/components/course-card/course-card';
import { ButtonComponent } from '../../shared/components/button/button';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { CoursesService } from '../../services/courses.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-courses',
  imports: [CourseCardComponent, ButtonComponent, RevealOnScrollDirective],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class CoursesComponent implements OnInit {
  private readonly coursesService = inject(CoursesService);
  private readonly seo = inject(SeoService);

  private readonly allCourses = this.coursesService.courses;
  protected readonly activeCategory = signal('All');

  protected readonly categories = computed(() => ['All', ...new Set(this.allCourses().map((c) => c.category))]);

  protected readonly filteredCourses = computed(() => {
    const category = this.activeCategory();
    return category === 'All' ? this.allCourses() : this.allCourses().filter((c) => c.category === category);
  });

  ngOnInit(): void {
    this.seo.update(
      'Courses',
      'Explore IELTS, PTE, Spoken English, Personality Development, Computer Courses and more at Education House.',
    );
  }

  setCategory(category: string): void {
    this.activeCategory.set(category);
  }
}
