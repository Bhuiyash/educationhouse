import { Component, booleanAttribute, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export type ButtonVariant = 'primary' | 'accent' | 'outline' | 'outline-primary';
export type ButtonSize = 'md' | 'sm';

@Component({
  selector: 'app-button',
  imports: [RouterLink],
  templateUrl: './button.html',
})
export class ButtonComponent {
  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<ButtonSize>('md');
  readonly type = input<'button' | 'submit'>('button');
  readonly routerLink = input<string | undefined>(undefined);
  readonly href = input<string | undefined>(undefined);
  readonly block = input(false, { transform: booleanAttribute });
  readonly disabled = input(false, { transform: booleanAttribute });

  get classes(): string {
    const base = ['btn', `btn-${this.variant()}`];
    if (this.size() === 'sm') base.push('btn-sm');
    if (this.block()) base.push('btn-block');
    return base.join(' ');
  }
}
