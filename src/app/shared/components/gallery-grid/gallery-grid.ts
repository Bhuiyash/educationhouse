import { Component, HostListener, input, signal } from '@angular/core';
import { GalleryImage } from '../../../models';

@Component({
  selector: 'app-gallery-grid',
  templateUrl: './gallery-grid.html',
  styleUrl: './gallery-grid.css',
})
export class GalleryGridComponent {
  readonly images = input.required<GalleryImage[]>();

  protected readonly activeIndex = signal<number | null>(null);

  get activeImage(): GalleryImage | null {
    const index = this.activeIndex();
    return index === null ? null : this.images()[index];
  }

  open(index: number): void {
    this.activeIndex.set(index);
  }

  close(): void {
    this.activeIndex.set(null);
  }

  next(event?: Event): void {
    event?.stopPropagation();
    const index = this.activeIndex();
    if (index === null) return;
    this.activeIndex.set((index + 1) % this.images().length);
  }

  prev(event?: Event): void {
    event?.stopPropagation();
    const index = this.activeIndex();
    if (index === null) return;
    this.activeIndex.set((index - 1 + this.images().length) % this.images().length);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (this.activeIndex() === null) return;
    if (event.key === 'Escape') this.close();
    if (event.key === 'ArrowRight') this.next();
    if (event.key === 'ArrowLeft') this.prev();
  }

  trackById(_index: number, image: GalleryImage): number {
    return image.id;
  }
}
