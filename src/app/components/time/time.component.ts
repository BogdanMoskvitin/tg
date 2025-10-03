import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit, OnDestroy {
  startDate = new Date('2024-10-01T20:07:00');
  time = '';
  private interval: any;

  ngOnInit() {
    this.updateTime();
    this.interval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  private updateTime() {
    const now = new Date();

    let years = now.getFullYear() - this.startDate.getFullYear();
    let months = now.getMonth() - this.startDate.getMonth();
    let days = now.getDate() - this.startDate.getDate();
    let hours = now.getHours() - this.startDate.getHours();
    let minutes = now.getMinutes() - this.startDate.getMinutes();
    let seconds = Math.floor((now.getTime() - this.startDate.getTime()) / 1000) % 60;

    if (months < 0) {
      years--;
      months += 12;
    }

    if (days < 0) {
      months--;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
      if (months < 0) {
        months +=12;
        years--;
      }
    }

    if (hours < 0) {
      hours +=24;
      days--;
      if (days <0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
        if (months <0) {
          months +=12;
          years--;
        }
      }
    }

    if (minutes < 0) {
      hours--;
      minutes +=60;
      if (hours <0) {
        days--;
        hours +=24;
        if (days<0) {
          months--;
          if (months<0) {
            months+=12;
            years--;
          }
          const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
          days+=prevMonth.getDate();
        }
      }
    }

    if (seconds <0) {
      minutes--;
      seconds+=60;
      if (minutes<0) {
        hours--;
        minutes+=60;
        if (hours<0) {
          days--;
          hours+=24;
          if (days<0) {
            months--;
            if (months<0) {
              months+=12;
              years--;
            }
            const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days+=prevMonth.getDate();
          }
        }
      }
    }

    this.time = `
      ${years} ${this.formatTimeText(years, 'year')} 
      ${months} мес
      ${days} ${this.formatTimeText(days, 'day')} 
      ${this.formatTimeValue(hours)}:${this.formatTimeValue(minutes)}:${this.formatTimeValue(seconds)}
    `;
  }

  private formatTimeValue(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  private formatTimeText(value: number, type: string): string {
    if (type === 'year') {
      if (value === 1) {
        return 'год';
      } else if (value >= 2 && value <= 4) {
        return 'года';
      } else {
        return 'лет';
      }
    } else if (type === 'month') {
      if (value === 1) {
        return 'месяц';
      } else if (value >= 2 && value <= 4) {
        return 'месяца';
      } else {
        return 'месяцев';
      }
    } else if (type === 'day') {
      if (value === 1 || value === 21 || value === 31) {
        return 'день';
      } else if ((value >= 2 && value <= 4) || (value >= 22 && value <= 24)) {
        return 'дня';
      } else {
        return 'дней';
      }
    } else if (type === 'hour') {
      if (value === 1 || value === 21) {
        return 'час';
      } else if ((value >= 2 && value <= 4) || (value >= 22 && value <= 24)) {
        return 'часа';
      } else {
        return 'часов';
      }
    } else if (type === 'minute') {
      if (value === 1 || value === 21 || value === 31 || value === 41 || value === 51) {
        return 'минуту';
      } else if ((value >= 2 && value <= 4) || (value >= 22 && value <= 24) || (value >= 32 && value <= 34) || (value >= 42 && value <= 44) || (value >= 52 && value <= 54)) {
        return 'минуты';
      } else {
        return 'минут';
      }
    } else if (type === 'second') {
      if (value === 1 || value === 21 || value === 31 || value === 41 || value === 51) {
        return 'секунду';
      } else if ((value >= 2 && value <= 4) || (value >= 22 && value <= 24) || (value >= 32 && value <= 34) || (value >= 42 && value <= 44) || (value >= 52 && value <= 54)) {
        return 'секунды';
      } else {
        return 'секунд';
      }
    } else return '';
  }
}