import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-task2-angular',
  templateUrl: './task2-angular.component.html',
  styleUrls: ['./task2-angular.component.css'],
})
export class Task2AngularComponent {
  @Input() src = '';
  @Input() moviename = '';
  @Input() rating = '';
  @Input() content = '';
  @Input() idx: number = 0;
  @Output() Mindex = new EventEmitter<number>();
  delMovie() {
    this.Mindex.emit(this.idx);
  }

  showResult() {
    let showLess = true;
  }

  hideResult() {
    let showLess = false;
  }
}
