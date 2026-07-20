import { Component, input } from '@angular/core';
import { Course } from '../../../models';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-course-card',
  imports: [ButtonComponent],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCardComponent {
  readonly course = input.required<Course>();
}
