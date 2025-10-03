import { Component } from '@angular/core';
import { IAnswer } from 'src/app/models/question.interface';

@Component({
  selector: 'app-chatterbox',
  templateUrl: './chatterbox.component.html',
  styleUrls: ['./chatterbox.component.scss']
})
export class ChatterboxComponent {
  question = {
    id: 4,
    question: 'Кто из нас — настоящий болтун в чате?',
    icon: 'communication',
    answers: [
      {
        id: 1,
        isCorrect: true,
        img: '../../../assets/images/victoria.jpg',
        isSelected: false,
        value: 37453,
        percent: 54,
      }, {
        id: 2,
        img: '../../../assets/images/bogdan.jpg',
        isSelected: false,
        value: 31933,
        percent: 46,
      },
    ],
  };
  isSuccess: boolean = false;

  getClassForImgAnswer(answer: any) {
    return {
      ['shake' + answer.id]: true,
      'correctImg': answer.isCorrect && answer.isSelected,
      'incorrectImg': !answer.isCorrect && answer.isSelected
    };
  }
  
  selectAnswer(answer: IAnswer) {
    this.question.answers.forEach(el => {
      if (answer.id === el.id) {
        el.isSelected = true;
        if (answer.isCorrect) {
          this.isSuccess = true;
        }
      }
    })
  }
}
