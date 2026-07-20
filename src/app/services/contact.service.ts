import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  submit(payload: ContactPayload): Observable<{ success: true }> {
    return of({ success: true as const }).pipe(delay(900));
  }
}
