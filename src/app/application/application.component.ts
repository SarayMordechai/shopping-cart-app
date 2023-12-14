import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {
  constructor(private router: Router) {
  }
  logout() {
    localStorage.removeItem('login_user');
    this.router.navigate(['/login'])
  }
}
