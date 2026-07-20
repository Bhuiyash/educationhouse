import { Component, input } from '@angular/core';
import { Feature } from '../../../models';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.css',
})
export class FeatureCardComponent {
  readonly feature = input.required<Feature>();
}
