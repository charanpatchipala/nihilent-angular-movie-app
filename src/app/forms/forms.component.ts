import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent {
  clr = 'orange';
  // updatecolor(event: any) {
  //   console.log(event.target.value);
  //   this.clr = event.target.value;
  // }
  colorList = ['red', 'blue', 'black'];
  addcolor() {
    this.colorList.push(this.clr);
  }
  delclr(i: number) {
    this.colorList.splice(i, 1);
  }
}
