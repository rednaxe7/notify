import { Component } from '@angular/core';
import { NotificationService } from './services/notification.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
 title = 'notify';
 
 constructor(public notify: NotificationService) {}

 showSuccess() {
 	this.notify.showSuccess('Hello world!', 'Toastr fun!');
  }
 
}
