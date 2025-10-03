import { Component, OnInit } from '@angular/core';
// import data from './data/data.json';
// import { IMessages } from 'src/app/models/data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tg';
  // data: IMessages = data as IMessages;

  ngOnInit(): void {
    // console.log('Общее кол-во сообщений: ', this.data.messages.length)
    // console.log('Богдан: ', this.calcCountMessages('Bogdan'));
    // console.log('Процент сообщений Богдана: ', Math.round(this.calcCountMessages('Bogdan')/(this.calcCountMessages('Bogdan') + this.calcCountMessages('Викуля'))*100));
    // console.log('Викуля: ', this.calcCountMessages('Викуля'));
    // console.log('Процент сообщений Викули: ', Math.round(this.calcCountMessages('Викуля')/(this.calcCountMessages('Bogdan') + this.calcCountMessages('Викуля'))*100));
    // console.log('Типы сообщений: ', this.getAllTypesMessages());
    // console.log('Ключи: ', this.getUniqueKeys());
    // console.log('Стикеры Викули: ', this.sortStickersByCountDescending(this.calcCountStickers()));
    // console.log('Голосовые от Викули: ', this.calcCountVoice('Викуля'));
    // console.log('Процент голосовых Викули: ', this.calcCountVoice('Викуля')/this.calcCountMessages('Викуля')*100);
    // console.log('Самое длинное голосовое Викули: ', this.foundTheLongestVoice());
    // console.log('Кол-во кружочков Викули: ', this.calcCountVideo('Викуля'));

    // console.log('котенок: ', this.calcCountName('котенок'));
    // console.log('кусенька, куся, кусь: ', this.calcCountName('кусенька, куся, кусь'));
    // console.log('малышка, малыш: ', this.calcCountName('малышка, малыш'));
    // console.log('нереалочка: ', this.calcCountName('нереалочка'));
    // console.log('красавица: ', this.calcCountName('красавица'));
  }

  // calcCountMessages(person: string) {
  //   let count = 0;
  //   this.data.messages.forEach(element => {
  //     if (element.from === person) count++;
  //   });
  //   return count;
  // }

  // getAllTypesMessages() {
  //   let arrTypes: string[] = [];
  //   this.data.messages.forEach(element => {
  //     if (!arrTypes.includes(element.type)) {
  //       arrTypes.push(element.type);
  //     }
  //   });
  //   return arrTypes;
  // }

  // getUniqueKeys() {
  //   const uniqueKeys = new Set();
  //   this.data.messages.forEach(obj => {
  //     Object.keys(obj).forEach(key => {
  //       uniqueKeys.add(key);
  //     });
  //   });
  //   return Array.from(uniqueKeys);
  // }

  // calcCountStickers() {
  //   let arrStickers: Array<{thumbnail: string, count: number}> = [];
  //   this.data.messages.forEach(element => {
  //     if (element.from === 'Викуля' && element.thumbnail) {
  //       const existingEntry = arrStickers.find(item => item.thumbnail === element.thumbnail);
  //       if (existingEntry) {
  //         existingEntry.count += 1;
  //       } else {
  //         arrStickers.push({ thumbnail: element.thumbnail, count: 1 });
  //       }
  //     }
  //   });
  //   return arrStickers;
  // }

  // sortStickersByCountDescending(arr: Array<{thumbnail: string, count: number}>): Array<{thumbnail: string, count: number}> {
  //   return arr.sort((a, b) => b.count - a.count);
  // }

  // calcCountVoice(person: string) {
  //   let count = 0;
  //   this.data.messages.forEach(el => {
  //     if (el.from === person && el.media_type && el.media_type === 'voice_message') {
  //       count++;
  //     }
  //   })
  //   return count;
  // }

  // foundTheLongestVoice() {
  //   let long = 0;
  //   this.data.messages.forEach(el => {
  //     if (el.media_type && el.media_type === 'voice_message') {
  //       if (long < el.file_size && el.file_size !== 3396351 && el.file_size !== 3194021) {
  //         long = el.file_size;
  //       }
  //     }
  //   })
  //   return long;
  // }

  // calcCountVideo(person: string) {
  //   let count = 0;
  //   this.data.messages.forEach(el => {
  //     if (el.from === person && el.file && el.file.includes('round_video_messages')) {
  //       count++;
  //     }
  //   })
  //   return count;
  // }

  // calcCountName(name: string) {
  //   const names = name.split(',').map(n => n.trim().toLowerCase());
  //   let count = 0;
  //   this.data.messages.forEach(el => {
  //     if (el.from === 'Bogdan' && el.text && typeof el.text === 'string') {
  //       const textLower = el.text.toLowerCase();
  //       if (names.some(name => textLower.includes(name))) {
  //         count++;
  //       }
  //     }
  //   });
  //   return count;
  // }
}
