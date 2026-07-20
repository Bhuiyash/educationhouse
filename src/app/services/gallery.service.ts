import { Injectable, signal } from '@angular/core';
import { GalleryImage } from '../models';

@Injectable({ providedIn: 'root' })
export class GalleryService {
  private readonly _images = signal<GalleryImage[]>([
    { id: 1, src: 'https://picsum.photos/seed/eh-classroom-1/640/480', alt: 'Students engaged in a classroom activity', category: 'Classroom Activities' },
    { id: 2, src: 'https://picsum.photos/seed/eh-learning-1/640/480', alt: 'Students learning together at their desks', category: 'Students Learning' },
    { id: 3, src: 'https://picsum.photos/seed/eh-celebration-1/640/480', alt: 'Children celebrating an achievement day', category: 'Celebrations' },
    { id: 4, src: 'https://picsum.photos/seed/eh-interactive-1/640/480', alt: 'Interactive session with a teacher', category: 'Interactive Sessions' },
    { id: 5, src: 'https://picsum.photos/seed/eh-classroom-2/640/480', alt: 'Group activity in the classroom', category: 'Classroom Activities' },
    { id: 6, src: 'https://picsum.photos/seed/eh-activity-1/640/480', alt: 'Students taking part in an educational activity', category: 'Educational Activities' },
    { id: 7, src: 'https://picsum.photos/seed/eh-learning-2/640/480', alt: 'Student reading and practising English', category: 'Students Learning' },
    { id: 8, src: 'https://picsum.photos/seed/eh-interactive-2/640/480', alt: 'Teacher guiding students through a lesson', category: 'Interactive Sessions' },
    { id: 9, src: 'https://picsum.photos/seed/eh-celebration-2/640/480', alt: 'Certificate distribution celebration', category: 'Celebrations' },
    { id: 10, src: 'https://picsum.photos/seed/eh-activity-2/640/480', alt: 'Creative activity session with young learners', category: 'Educational Activities' },
    { id: 11, src: 'https://picsum.photos/seed/eh-classroom-3/640/480', alt: 'Focused classroom learning session', category: 'Classroom Activities' },
    { id: 12, src: 'https://picsum.photos/seed/eh-interactive-3/640/480', alt: 'Students participating in a group discussion', category: 'Interactive Sessions' },
  ]);

  readonly images = this._images.asReadonly();
}
