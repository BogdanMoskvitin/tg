import { Component } from '@angular/core';
import { IQuestion } from 'src/app/models/question.interface';

@Component({
  selector: 'app-first-offline',
  templateUrl: './first-offline.component.html',
  styleUrls: ['./first-offline.component.scss']
})
export class FirstOfflineComponent {
  question: IQuestion = {
    id: 2,
    question: 'Через сколько времени общения мы наконец встретились офлайн?',
    icon: 'calendar_month',
    answers: [
      {
        title: '2 дня',
      }, 
      {
        title: '5 дней',
        isCorrect: true,
      }, {
        title: '2 недели',
      },
    ],
  };
}
