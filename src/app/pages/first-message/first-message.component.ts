import { Component } from '@angular/core';
import { IMessage } from 'src/app/models/message.interface';
import { IAnswer, IQuestion } from 'src/app/models/question.interface';

@Component({
  selector: 'app-first-message',
  templateUrl: './first-message.component.html',
  styleUrls: ['./first-message.component.scss']
})
export class FirstMessageComponent {
  question: IQuestion = {
    id: 1,
    question: 'Какое было мое первое сообщение тебе?',
    icon: 'mail',
    answers: [
      {
        id: 1,
        title: 'приветик киса) не меня ждешь?',
      }, 
      {
        id: 2,
        title: 'Добрый день, Виктория! Пообщаемся?',
      },
      {
        id: 3,
        title: 'привет) похоже у нас мэтч, поболтаем?',
        isCorrect: true, 
      },
    ],
  };
  isSuccess: boolean = false;
  messages: IMessage[] = [
    {
      id: 1,
      text: 'привет) похоже у нас мэтч, поболтаем?'
    },
    {
      id: 2,
      text: 'Приветик)'
    },
    {
      id: 1,
      text: 'приветик) извини, вчера не смог ответить'
    },
    {
      id: 1,
      text: 'как настроение? Чем занимаешься?'
    },
    {
      id: 2,
      text: 'Хорошее , твое как ?\nДа только встала воду пью\nА ты?)'
    },
    {
      id: 1,
      text: 'Везет тебе) а я уже во всю работаю😑'
    },
    {
      id: 1,
      text: 'учишься или работаешь?'
    },
    {
      id: 2,
      text: 'Устраиваюсь\nВот проспала звонок с работы'
    },
    {
      id: 1,
      text: 'Пхахах'
    },
    {
      id: 1,
      text: 'Ну, значит не твоя работа'
    },
  ];
  displayedMessages: IMessage[] = [];

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
