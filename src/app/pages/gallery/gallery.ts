import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { GalleryGridComponent } from '../../shared/components/gallery-grid/gallery-grid';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { GalleryService } from '../../services/gallery.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-gallery',
  imports: [GalleryGridComponent, RevealOnScrollDirective],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class GalleryComponent implements OnInit {
  private readonly galleryService = inject(GalleryService);
  private readonly seo = inject(SeoService);

  private readonly allImages = this.galleryService.images;
  protected readonly activeCategory = signal('All');

  protected readonly categories = computed(() => ['All', ...new Set(this.allImages().map((i) => i.category))]);

  protected readonly filteredImages = computed(() => {
    const category = this.activeCategory();
    return category === 'All' ? this.allImages() : this.allImages().filter((i) => i.category === category);
  });

  ngOnInit(): void {
    this.seo.update('Gallery', 'Take a look at student workshops, events and campus life at Education House.');
  }

  setCategory(category: string): void {
    this.activeCategory.set(category);
  }
}
