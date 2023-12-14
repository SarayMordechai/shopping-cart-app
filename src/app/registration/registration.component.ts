import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  emailError: string = '';
  passwordError: string = '';
  confirmPasswordError: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.isEmailRegistered()) {
      this.emailError = 'User already exists with this email';
      return;
    }

    const newUser: User = { email: this.email, password: this.password };
    const users: User[] = JSON.parse(localStorage.getItem('shopping_users') || '[]');
    users.push(newUser);
    localStorage.setItem('shopping_users', JSON.stringify(users));

    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    // Registration successful
    console.log('Registration successful');
    this.router.navigate(['/login']);

  }

  validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailError = emailRegex.test(this.email) ? '' : 'Invalid email format';
  }

  validatePassword() {
    const passwordLengthValid = this.password.length >= 6;
    const passwordContainsUppercase = /[A-Z]/.test(this.password);

    if (!passwordLengthValid || !passwordContainsUppercase) {
      this.passwordError = 'Password must be at least 6 characters and contain at least 1 capital letter';
    } else {
      this.passwordError = '';
    }
  }

  validateConfirmPassword() {
    this.confirmPasswordError = (this.password === this.confirmPassword) ? '' : 'Passwords do not match';
  }

  isEmailRegistered(): boolean {
    const users: User[] = JSON.parse(localStorage.getItem('shopping_users') || '[]');
    return users.some(user => user.email === this.email);
  }
}
