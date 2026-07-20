import { Component, input } from '@angular/core';
import { Founder } from '../../../models';

@Component({
  selector: 'app-founder-card',
  templateUrl: './founder-card.html',
  styleUrl: './founder-card.css',
})
export class FounderCardComponent {
  readonly founder = input.required<Founder>();
}
