import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-task1-angular',
  templateUrl: './task1-angular.component.html',
  styleUrls: ['./task1-angular.component.css']
})
export class Task1AngularComponent {
      @Input() name="charan"
      @Input() src="https://www.hindustantimes.com/ht-img/img/2023/09/09/550x309/CRICKET-ASIA-CUP-SRI-BAN-ODI-12_1694284366814_1694284440268.jpg"
}
