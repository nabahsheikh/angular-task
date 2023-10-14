import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string = ''
  password:string=''
  constructor(private router: Router) {}
  isValid(){
    if( this.email == 'nabahsheikh@gmail.com' && this.password == '12345'){
      this.router.navigate(['/dashboard'])
    }
    else{
      console.log('Invalid User')
    }
  }
}
