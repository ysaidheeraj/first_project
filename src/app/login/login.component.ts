import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  tittle = "Sai";
  url = window.location.href;
  isDisabled=false;
  submit = "Submit";
  onClick(){
    console.log('Button Clicked');
  }
}
