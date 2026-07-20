import { Component, input } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-section-title',
  imports: [RevealOnScrollDirective],
  templateUrl: './section-title.html',
  styleUrl: './section-title.css',
})
export class SectionTitleComponent {
  readonly eyebrow = input<string | undefined>(undefined);
  readonly title = input.required<string>();
  readonly subtitle = input<string | undefined>(undefined);
  readonly align = input<'left' | 'center'>('center');
}
