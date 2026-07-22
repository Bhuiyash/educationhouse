import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button';

interface NavLink {
  label: string;
  path: string;
  fragment?: string;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, ButtonComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  protected readonly isMenuOpen = signal(false);
  protected readonly isScrolled = signal(false);
  private scrollTicking = false;

  readonly navLinks: NavLink[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Why Choose Us', path: '/', fragment: 'why-us' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (this.scrollTicking) return;
    this.scrollTicking = true;
    requestAnimationFrame(() => {
      this.isScrolled.set(window.scrollY > 12);
      this.scrollTicking = false;
    });
  }

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
