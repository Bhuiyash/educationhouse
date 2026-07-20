import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);

  update(title: string, description: string): void {
    this.titleService.setTitle(`${title} | Education House`);
    this.metaService.updateTag({ name: 'description', content: description });
  }
}
