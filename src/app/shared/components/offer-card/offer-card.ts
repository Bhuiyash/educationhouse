import { Component, input } from '@angular/core';
import { Offer } from '../../../models';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-offer-card',
  imports: [ButtonComponent],
  templateUrl: './offer-card.html',
  styleUrl: './offer-card.css',
})
export class OfferCardComponent {
  readonly offer = input.required<Offer>();
}
