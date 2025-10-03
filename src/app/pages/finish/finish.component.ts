// import { Component, OnInit, OnDestroy } from '@angular/core';

// @Component({
//   selector: 'app-finish',
//   templateUrl: './finish.component.html',
//   styleUrls: ['./finish.component.scss'],
// })
// export class FinishComponent implements OnInit, OnDestroy {
//   texts: string[] = [
//     'Я пишу это письмо утром, пока ты спишь. В комнате прохладно, лёгкий ветерок задувает в окно, и штора слегка покачивается. Ты, укутавшись в одеяло и обняв подушку, тихонько сопишь. Я смотрю на тебя и думаю, как могло случиться, что в этом огромном мире я встретил именно тебя? В начале мне казалось, что мы будто из разных миров, но чем больше я тебя узнаю, тем яснее понимаю, что рядом моя Куся.',
//     'Знаешь, иногда мне страшно — ведь чем сильнее я люблю, тем сильнее боюсь потерять тебя. Но именно эта любовь делает меня живым и счастливым. Благодаря тебе я почувствовал себя особенным. Я искренне благодарен тебе за то, что ты выбираешь быть со мной каждый день.',
//     'Ты — самое дорогое, что у меня есть. Я люблю тебя! Я сижу и жду, когда ты проснёшься, чтобы обнять тебя и прижаться. Спасибо за этот год. Я верю, что дальше будет ещё прекраснее, вместе с тобой.'
//   ]
  
//   displayedTexts: string[] = [];
  
//   index: number = 0;
//   currentTextIndex: number = 0;
//   interval: any;
  
//   isLink: boolean = false;

//   ngOnInit() {
//     // Инициализируем массив отображаемых текстов пустыми строками
//     this.displayedTexts = Array(this.texts.length).fill('');
    
//     // Запускаем анимацию через 1 секунду после загрузки компонента
//     setTimeout(() => {
//       this.startTyping();
//     }, 1000); // Задержка перед началом анимации
//   }

//   startTyping() {
//     this.index = 0;

//     // Определяем текущий текст для анимации
//     const currentText = this.texts[this.currentTextIndex];

//     // Устанавливаем интервал для отображения текста
//     this.interval = setInterval(() => {
//       if (this.index < currentText.length) {
//         // Обновляем соответствующий элемент в массиве отображаемых текстов
//         this.displayedTexts[this.currentTextIndex] += currentText[this.index];
//         this.index++;
//       } else {
//         clearInterval(this.interval);
//         // Переход к следующему тексту после завершения текущего
//         this.currentTextIndex++;
//         if (this.currentTextIndex < this.texts.length) {
//           setTimeout(() => {
//             this.startTyping(); // Запускаем анимацию для следующего текста
//           }, 1000); // Задержка перед началом следующего текста
//         } else {
//           setTimeout(() => {this.isLink = true;}, 1000);
//         }
//       }
//     }, 50); // Задайте скорость появления букв в миллисекундах
//   }

//   ngOnDestroy() {
//     if (this.interval) {
//       clearInterval(this.interval);
//     }
//   }
// }

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss'],
})
export class FinishComponent implements OnInit, OnDestroy {
  texts: string[] = [
    'Я пишу это письмо утром, пока ты спишь. В комнате прохладно, лёгкий ветерок задувает в окно, и штора слегка покачивается. Ты, укутавшись в одеяло и обняв подушку, тихонько сопишь. Я смотрю на тебя и думаю, как могло случиться, что в этом огромном мире я встретил именно тебя? В начале мне казалось, что мы будто из разных миров, но чем больше я тебя узнаю, тем яснее понимаю, что рядом моя Куся.',
    'Знаешь, иногда мне страшно — ведь чем сильнее я люблю, тем сильнее боюсь потерять тебя. Но именно эта любовь делает меня живым и счастливым. Благодаря тебе я почувствовал себя особенным. Я искренне благодарен тебе за то, что ты выбираешь быть со мной каждый день.',
    'Ты — самое дорогое, что у меня есть. Я люблю тебя! Я сижу и жду, когда ты проснёшься, чтобы обнять тебя и прижаться. Спасибо за этот год. Я верю, что дальше будет ещё прекраснее, вместе с тобой.'
  ]

  displayedTexts: string[] = [];

  currentTextIndex: number = 0;
  currentCharIndex: number = 0;
  timeoutId: any;

  isLink: boolean = false;

  // Параметры управления скоростью
  typingSpeed = 50;          // базовая скорость (мс)
  pauseAfterComma = 300;     // пауза после запятой (мс)
  pauseAfterSentence = 700;  // пауза после точки, !, ? (мс)
  pauseAfterParagraph = 1000; // пауза после абзаца (мс)

  ngOnInit() {
    this.displayedTexts = Array(this.texts.length).fill('');
    setTimeout(() => {
      this.typeNextChar();
    }, 1000);
  }

  typeNextChar() {
    if (this.currentTextIndex >= this.texts.length) {
      // Все тексты напечатаны
      setTimeout(() => {
        this.isLink = true;
      }, this.pauseAfterParagraph);
      return;
    }

    const currentText = this.texts[this.currentTextIndex];

    if (this.currentCharIndex < currentText.length) {
      const currentChar = currentText[this.currentCharIndex];
      this.displayedTexts[this.currentTextIndex] += currentChar;
      this.currentCharIndex++;

      // Определяем паузу после символа
      let delay = this.typingSpeed;

      if (currentChar === ',') {
        delay = this.pauseAfterComma;
      } else if (['.', '!', '?'].includes(currentChar)) {
        delay = this.pauseAfterSentence;
      }

      this.timeoutId = setTimeout(() => {
        this.typeNextChar();
      }, delay);

    } else {
      // Текст полностью выведен, переходим к следующему
      this.currentCharIndex = 0;
      this.currentTextIndex++;

      this.timeoutId = setTimeout(() => {
        this.typeNextChar();
      }, this.pauseAfterParagraph);
    }
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}