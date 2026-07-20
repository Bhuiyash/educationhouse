import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.HomeComponent),
    title: 'Education House | Study Abroad & Test Prep Consultancy',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.AboutComponent),
  },
  {
    path: 'courses',
    loadComponent: () => import('./pages/courses/courses').then((m) => m.CoursesComponent),
  },
  {
    path: 'study-abroad',
    loadComponent: () => import('./pages/study-abroad/study-abroad').then((m) => m.StudyAbroadComponent),
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery').then((m) => m.GalleryComponent),
  },
  {
    path: 'testimonials',
    loadComponent: () => import('./pages/testimonials/testimonials').then((m) => m.TestimonialsComponent),
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq').then((m) => m.FaqComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.ContactComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFoundComponent),
  },
];
