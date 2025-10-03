import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  correctAnswer: string = 'центральный парк';
  answer: string = '';
  isError: boolean = false;

  constructor(private router: Router) {}

  checkAnswer() {
    if (this.answer.trim().toLowerCase() === this.correctAnswer) {
      localStorage.setItem('isAuthenticated', 'true');
      this.router.navigate(['/start']);
    } else if (this.answer === 'reset') {
      localStorage.removeItem('isAuthenticated');
    } else {
      this.isError = true;
    }
  }

  onInput() {
    this.isError = false;
  }
}
