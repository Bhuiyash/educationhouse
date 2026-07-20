import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();
  protected readonly newsletterEmail = signal('');
  protected readonly isSubscribed = signal(false);

  readonly quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Courses', path: '/courses' },
    { label: 'Study Abroad', path: '/study-abroad' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact Us', path: '/contact' },
  ];

  readonly courseLinks = ['IELTS', 'PTE', 'Spoken English', 'Personality Development', 'Computer Courses', 'Visa Assistance'];

  readonly socialLinks = [
    { label: 'Facebook', icon: 'f', href: 'https://facebook.com' },
    { label: 'Instagram', icon: '◎', href: 'https://instagram.com' },
    { label: 'LinkedIn', icon: 'in', href: 'https://linkedin.com' },
    { label: 'YouTube', icon: '▶', href: 'https://youtube.com' },
  ];

  subscribe(): void {
    if (!this.newsletterEmail().trim()) return;
    this.isSubscribed.set(true);
    this.newsletterEmail.set('');
  }
}
