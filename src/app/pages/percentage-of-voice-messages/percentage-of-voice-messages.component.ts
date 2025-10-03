import { Component } from '@angular/core';
import { IQuestion } from 'src/app/models/question.interface';

@Component({
  selector: 'app-percentage-of-voice-messages',
  templateUrl: './percentage-of-voice-messages.component.html',
  styleUrls: ['./percentage-of-voice-messages.component.scss']
})
export class PercentageOfVoiceMessagesComponent {
  question: IQuestion = {
    id: 6,
    question: 'Как думаешь, какой процент твоих сообщений - это сладкие голосовые, которые я слушаю по 2 раза?',
    icon: 'mic',
    answers: [
      {
        title: '2%', 
      },
      {
        title: '5%', 
      },
      {
        title: '9%', 
        isCorrect: true,
      },
      {
        title: '19%',
      },
    ],
  };
}
