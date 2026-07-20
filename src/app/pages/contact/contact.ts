import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form';
import { ButtonComponent } from '../../shared/components/button/button';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { SeoService } from '../../services/seo.service';

interface ContactDetail {
  icon: string;
  title: string;
  lines: string[];
}

@Component({
  selector: 'app-contact',
  imports: [ContactFormComponent, ButtonComponent, RevealOnScrollDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent implements OnInit {
  private readonly seo = inject(SeoService);
  private readonly sanitizer = inject(DomSanitizer);

  private readonly primaryPhone = '9450212553';
  private readonly whatsappPhone = '9695689720';

  readonly contactDetails: ContactDetail[] = [
    { icon: '📍', title: 'Visit Us', lines: ['Near UPHC III Road', 'Lucknow, Uttar Pradesh 226013'] },
    { icon: '📞', title: 'Call Us', lines: ['+91 94502 12553', '+91 96956 89720'] },
    { icon: '🕒', title: 'Opening Hours', lines: ['Mon – Sat: 9:00 AM – 7:00 PM', 'Sunday: 10:00 AM – 2:00 PM'] },
  ];

  readonly callHref = `tel:+91${this.primaryPhone}`;
  readonly whatsappHref = `https://wa.me/91${this.whatsappPhone}?text=${encodeURIComponent(
    'Hi, I would like to know more about admissions at Education House.',
  )}`;
  readonly googleMapsHref = 'https://www.google.com/maps?cid=10383142876289878479';
  readonly mapEmbedSrc: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.google.com/maps?q=Near+UPHC+III+Road,+Lucknow,+Uttar+Pradesh+226013&output=embed',
  );

  ngOnInit(): void {
    this.seo.update(
      'Contact Us',
      'Get in touch with Education House in Lucknow for admissions and enquiries for students from Class 1 to Class 8.',
    );
  }
}
