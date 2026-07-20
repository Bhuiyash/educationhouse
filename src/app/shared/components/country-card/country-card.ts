import { Component, input } from '@angular/core';
import { Country } from '../../../models';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-country-card',
  imports: [ButtonComponent],
  templateUrl: './country-card.html',
  styleUrl: './country-card.css',
})
export class CountryCardComponent {
  readonly country = input.required<Country>();
}
