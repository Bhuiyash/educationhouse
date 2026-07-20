import { Component, OnInit, inject } from '@angular/core';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { SeoService } from '../../services/seo.service';

interface ContactDetail {
  icon: string;
  title: string;
  lines: string[];
}

@Component({
  selector: 'app-contact',
  imports: [ContactFormComponent, RevealOnScrollDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent implements OnInit {
  private readonly seo = inject(SeoService);

  readonly contactDetails: ContactDetail[] = [
    { icon: '📍', title: 'Visit Us', lines: ['123 MG Road, Bengaluru', 'Karnataka 560001, India'] },
    { icon: '📞', title: 'Call Us', lines: ['+91 123 456 7890', '+91 987 654 3210'] },
    { icon: '✉️', title: 'Email Us', lines: ['info@educationhouse.in', 'admissions@educationhouse.in'] },
    { icon: '🕒', title: 'Opening Hours', lines: ['Mon – Sat: 9:00 AM – 7:00 PM', 'Sunday: 10:00 AM – 2:00 PM'] },
  ];

  ngOnInit(): void {
    this.seo.update(
      'Contact Us',
      'Get in touch with Education House for course enquiries, counselling sessions and visa assistance.',
    );
  }
}
