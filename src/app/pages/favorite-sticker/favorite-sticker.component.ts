import { Component } from '@angular/core';
import { IAnswer, IQuestion } from 'src/app/models/question.interface';

@Component({
  selector: 'app-favorite-sticker',
  templateUrl: './favorite-sticker.component.html',
  styleUrls: ['./favorite-sticker.component.scss']
})
export class FavoriteStickerComponent {
  question: IQuestion = {
    id: 5,
    question: 'Выбери свой самый любимый стикер:',
    icon: 'ar_stickers',
    answers: [
      {
        id: 1,
        title: ' раз',
        isCorrect: true,
        img: 'assets/images/1.jpg',
        value: 249,
        isSelected: false,
      }, 
      {
        id: 2,
        title: ' раз',
        img: 'assets/images/2.jpg',
        value: 231,
        isSelected: false,
      }, 
      {
        id: 3,
        title: ' раза',
        img: 'assets/images/3.jpg',
        value: 193,
        isSelected: false,
      },
      { 
        id: 4,
        title: ' раз',
        img: 'assets/images/4.jpg',
        value: 145,
        isSelected: false,
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
