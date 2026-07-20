import { Injectable, signal } from '@angular/core';
import { Feature } from '../models';

@Injectable({ providedIn: 'root' })
export class FeaturesService {
  private readonly _features = signal<Feature[]>([
    { icon: '🏆', title: '25+ Years of Teaching Excellence', description: 'Decades of classroom experience shaping how we teach every child who walks through our doors.' },
    { icon: '👩‍🏫', title: 'Experienced Teachers', description: 'A dedicated faculty that understands how young minds learn, grow and stay motivated.' },
    { icon: '👥', title: 'Small Batch Sizes', description: 'We keep every batch small so no child is ever just a face in the crowd.' },
    { icon: '🎯', title: 'Individual Attention', description: 'Every student is tracked and guided according to their own pace and learning style.' },
    { icon: '🏡', title: 'Friendly Learning Environment', description: 'A warm, welcoming space where children feel safe to ask questions and make mistakes.' },
    { icon: '📝', title: 'Regular Assessments', description: 'Frequent tests and reviews keep learning on track and highlight where each child needs support.' },
    { icon: '📲', title: 'Parent Progress Updates', description: 'Parents stay informed and involved with regular, honest updates on their child’s progress.' },
    { icon: '🧱', title: 'Strong Academic Foundation', description: 'We build concept clarity from the ground up, not just exam-day shortcuts.' },
    { icon: '🎮', title: 'Interactive Learning', description: 'Activities, discussions and hands-on practice keep every lesson engaging.' },
    { icon: '🛡️', title: 'Safe Learning Environment', description: 'A secure, disciplined and caring space that parents can fully trust.' },
    { icon: '💰', title: 'Affordable Quality Education', description: 'Premium teaching and personal attention, priced to be accessible for every family.' },
  ]);

  readonly features = this._features.asReadonly();
}
