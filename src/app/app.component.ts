import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
 title = 'notify';
 
 constructor(private toastr: ToastrService) {}
 
 showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
 }

 showError(){ 
	this.toastr.error('everything is broken', 'Major Error', {
  		timeOut: 3000
	});
 }

 showToast=()=>{
    this.toastRef = this.toastr.show("Test",null,{
      disableTimeOut: true,
      tapToDismiss: false,
      toastClass: "toast border-red",
      closeButton: true,
      positionClass:'bottom-left'
    });
  }

  removeToast = () =>{
    this.toastr.clear(this.toastRef.ToastId);
  }
 
}
