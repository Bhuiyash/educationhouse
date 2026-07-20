import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();

  readonly quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact Us', path: '/contact' },
  ];

  readonly socialLinks = [
    { label: 'Facebook', icon: 'f', href: 'https://facebook.com' },
    { label: 'Instagram', icon: '◎', href: 'https://instagram.com' },
    { label: 'YouTube', icon: '▶', href: 'https://youtube.com' },
  ];
}
