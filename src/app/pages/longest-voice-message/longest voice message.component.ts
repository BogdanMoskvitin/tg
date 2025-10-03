import { Component, OnInit } from '@angular/core';
import { IMessage } from 'src/app/models/message.interface';
import { IAnswer, IQuestion } from 'src/app/models/question.interface';

@Component({
  selector: 'app-longest voice message',
  templateUrl: './longest voice message.component.html',
  styleUrls: ['./longest voice message.component.scss']
})
export class LongestVoiceMessageComponent implements OnInit {
  question: IQuestion = {
    id: 8,
    question: 'Угадай, сколько по времени длилось твое самое длинное голосовое?',
    icon: 'mic_off',
    answers: [
      {
        id: 1,
        title: '3.55',
      },
      {
        id: 2,
        title: '4.19',
      },
      {
        id: 3,
        title: '8.47',
      },
      {
        id: 4,
        title: '13.32',
        isCorrect: true,
      },
    ],
  };
  isSuccess: boolean = false;
  messages: IMessage[] = [
    {
      id: 2,
      text: 'Там гс грузит'
    },
    {
      id: 2,
      text: 'Длинное'
    },
    {
      id: 1,
      text: 'Ок'
    },
    {
      id: 1,
      text: 'Ждемс'
    },
    {
      id: 2,
      text: 'Ну не прям длинное'
    },
    {
      id: 1,
      text: 'Пару часов, не больше'
    },
    {
      id: 2,
      type: 'voice'
    },
    {
      id: 2,
      type: 'sticker',
      src: '../../../assets/images/2.jpg'
    },
    {
      id: 1,
      text: 'Нифига се😅'
    },
    {
      id: 1,
      text: 'Подкаст целый'
    },
    {
      id: 2,
      type: 'sticker',
      src: '../../../assets/images/3.jpg'
    },
  ]
  displayedMessages: IMessage[] = [];
  waveItems: { id: number; height: number; }[] = [];

  ngOnInit(): void {
    this.generateWaveItems();
  }
  
  selectAnswer(answer: IAnswer) {
    this.question.answers.forEach(el => {
      if (answer.id === el.id) {
        el.isSelected = true;
        if (answer.isCorrect) {
          this.isSuccess = true;
          this.showMessages();
        }
      }
    })
  }

  generateWaveItems() {
    for(let i = 0; i < 45; i++) {
      this.waveItems.push({
        id: i + 1,
        height: Math.round((Math.random()+1)*10),
      })
    }
    return this.waveItems;
  }

  showMessages() {
    let index = 0;

    let interval = setInterval(() => {
      if (this.messages[index]) {
        this.displayedMessages.push(this.messages[index]);
        index++;
      } else {
        clearInterval(interval);
        return;
      }
    }, 800)
  }
}
