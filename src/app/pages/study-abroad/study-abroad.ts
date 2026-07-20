import { Component, OnInit, inject } from '@angular/core';
import { CountryCardComponent } from '../../shared/components/country-card/country-card';
import { ButtonComponent } from '../../shared/components/button/button';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { CountriesService } from '../../services/countries.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-study-abroad',
  imports: [CountryCardComponent, ButtonComponent, RevealOnScrollDirective],
  templateUrl: './study-abroad.html',
  styleUrl: './study-abroad.css',
})
export class StudyAbroadComponent implements OnInit {
  private readonly countriesService = inject(CountriesService);
  private readonly seo = inject(SeoService);

  protected readonly countries = this.countriesService.countries;

  ngOnInit(): void {
    this.seo.update(
      'Study Abroad',
      'Explore study abroad opportunities in Canada, Australia, UK, USA, Germany and Ireland with Education House.',
    );
  }
}
