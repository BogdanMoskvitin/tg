import { Component } from '@angular/core';
import { IAnswer, IQuestion } from 'src/app/models/question.interface';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent {
  question: IQuestion = {
    id: 7,
    question: 'Каким из этих милых неймов я называл тебе наиболее часто?',
    icon: 'favorite',
    answers: [
      {
        id: 1,
        title: 'котенок', 
        text: ' раз',
        value: 246,
      },
      {
        id: 2,
        title: 'кусенька', 
        isCorrect: true,
        text: ' раз',
        value: 811,
      },
      { 
        id: 3,
        title: 'красавица', 
        text: ' раз',
        value: 79,
      },
      {
        id: 4,
        title: 'малышка',
        text: ' раз',
        value: 377,
      },
    ],
  };
  isSuccess: boolean = false;

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
