import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { buildWhatsAppUrl } from '../../constants/whatsapp.constants';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactFormComponent {
  private readonly fb = inject(FormBuilder);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
  });

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, phone } = this.form.getRawValue();
    const message = [
      'Hello Education House,',
      '',
      'I would like to enquire about admission.',
      '',
      `Name: ${name}`,
      '',
      `Phone Number: ${phone}`,
      '',
      'Please contact me regarding coaching for my child.',
      '',
      'Thank you.',
    ].join('\n');

    window.open(buildWhatsAppUrl(message), '_blank');
  }
}
