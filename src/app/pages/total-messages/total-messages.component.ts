import { Component } from '@angular/core';
import { IQuestion } from 'src/app/models/question.interface';

@Component({
  selector: 'app-total-messages',
  templateUrl: './total-messages.component.html',
  styleUrls: ['./total-messages.component.scss']
})
export class TotalMessagesComponent {
  question: IQuestion = {
    id: 3,
    question: 'Как думаешь, сколько сообщений мы накатали за год?',
    icon: 'chat',
    answers: [
      {
        title: '5389',
      },
      {
        title: '29431',
      },
      {
        title: '69452',
        isCorrect: true,
      },
      {
        title: '81090',
      },
    ],
  };
}
