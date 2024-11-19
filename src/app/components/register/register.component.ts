import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstName: string = '';
  lastName: string = '';
  phoneNumber: string = '';
  email: string ='';
  password: string = ''

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.firstName, this.lastName,  this.email, this.phoneNumber, this.password).subscribe(response => {
      console.log({response});
    },
    (error) => {
      console.error('Registration failed', error);
    })
  }

}



