import { Component } from '@angular/core';


interface User {
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  emailError: string = '';
  passwordError: string = '';

  constructor() {}

  onSubmit() {
    this.clearErrors();
    if (!this.validateEmail(this.email)) {
      this.emailError = 'Invalid email format';
      return;
    }
    const users: User[] = JSON.parse(localStorage.getItem('shopping_users') || '[]');
    const user = users.find(u => u.email === this.email);
    if (!user) {
      this.emailError = 'Email does not exist';
      return;
    }
    if (user.password !== this.password) {
      this.passwordError = 'Incorrect password';
      return;
    }

    // Login successful
    console.log('Login successful');
  }

  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  clearErrors() {
    this.emailError = '';
    this.passwordError = '';
  }
}
