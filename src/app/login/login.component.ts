import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string = ''
  password:string=''

  isValid(){
    if( this.email == 'nabahsheikh@gmail.com' && this.password == '12345'){
      console.log("Valid User")
    }
    else{
      console.log('Invalid User')
    }
  }
}
