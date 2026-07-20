import { Injectable, signal } from '@angular/core';
import { GalleryImage } from '../models';

@Injectable({ providedIn: 'root' })
export class GalleryService {
  private readonly _images = signal<GalleryImage[]>([
    { id: 1, src: 'https://picsum.photos/seed/eh-gallery-1/640/480', alt: 'Students collaborating in classroom', category: 'Campus Life' },
    { id: 2, src: 'https://picsum.photos/seed/eh-gallery-2/640/480', alt: 'IELTS workshop in session', category: 'Workshops' },
    { id: 3, src: 'https://picsum.photos/seed/eh-gallery-3/640/480', alt: 'Graduation day celebration', category: 'Events' },
    { id: 4, src: 'https://picsum.photos/seed/eh-gallery-4/640/480', alt: 'Counsellor guiding a student', category: 'Counselling' },
    { id: 5, src: 'https://picsum.photos/seed/eh-gallery-5/640/480', alt: 'Group discussion practice session', category: 'Workshops' },
    { id: 6, src: 'https://picsum.photos/seed/eh-gallery-6/640/480', alt: 'Study abroad seminar', category: 'Events' },
    { id: 7, src: 'https://picsum.photos/seed/eh-gallery-7/640/480', alt: 'Computer lab training session', category: 'Campus Life' },
    { id: 8, src: 'https://picsum.photos/seed/eh-gallery-8/640/480', alt: 'Mock visa interview practice', category: 'Counselling' },
    { id: 9, src: 'https://picsum.photos/seed/eh-gallery-9/640/480', alt: 'Award ceremony for top scorers', category: 'Events' },
    { id: 10, src: 'https://picsum.photos/seed/eh-gallery-10/640/480', alt: 'Spoken English club meetup', category: 'Campus Life' },
    { id: 11, src: 'https://picsum.photos/seed/eh-gallery-11/640/480', alt: 'Personality development workshop', category: 'Workshops' },
    { id: 12, src: 'https://picsum.photos/seed/eh-gallery-12/640/480', alt: 'Students celebrating visa approval', category: 'Events' },
  ]);

  readonly images = this._images.asReadonly();
}
