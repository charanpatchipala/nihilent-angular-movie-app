import { Component , Input} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-task2-angular',
  templateUrl: './task2-angular.component.html',
  styleUrls: ['./task2-angular.component.css']
})
export class Task2AngularComponent {
@Input() src =""
@Input() moviename=""
@Input() rating=""
@Input() content=""
}
