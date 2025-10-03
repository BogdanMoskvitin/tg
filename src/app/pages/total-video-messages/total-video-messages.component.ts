import { Component } from '@angular/core';
import { IQuestion } from 'src/app/models/question.interface';

@Component({
  selector: 'app-total-video-messages',
  templateUrl: './total-video-messages.component.html',
  styleUrls: ['./total-video-messages.component.scss']
})
export class TotalVideoMessagesComponent {
  question: IQuestion = {
    id: 9,
    question: 'Угадай кол-во кружочков в нашем чате от тебя',
    icon: 'play_circle',
    answers: [
      {
        title: '39', 
      },
      {
        title: '86', 
      },
      {
        title: '118', 
      },
      {
        title: '199',
        isCorrect: true,
      },
    ],
  };
}
