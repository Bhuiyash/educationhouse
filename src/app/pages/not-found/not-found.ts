import { Component, OnInit, inject } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-not-found',
  imports: [ButtonComponent],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFoundComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update('Page Not Found', 'The page you are looking for could not be found.');
  }
}
