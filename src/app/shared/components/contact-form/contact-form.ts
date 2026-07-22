import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);

  protected readonly isSubmitting = signal(false);
  protected readonly isSubmitted = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s]{7,15}$/)]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.minLength(10)]],
  });

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    if (this.form.invalid || this.isSubmitting()) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    this.contactService.submit(this.form.getRawValue()).subscribe(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
      this.form.reset();
    });
  }

  sendAnother(): void {
    this.isSubmitted.set(false);
  }
}
