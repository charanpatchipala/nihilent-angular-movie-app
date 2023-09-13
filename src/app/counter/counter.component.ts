import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  count = 1;
  increment() {
    this.count++;
  }
  dcount = 1;
  decrement() {
    this.dcount++;
  }
  totalcount = 100;
  get finalcount() {
    return (this.totalcount % this.count) * 100;
  }
  get tcount() {
    return this.count - this.dcount >= 10;
  }
}
