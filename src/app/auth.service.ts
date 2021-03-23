import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean;

  constructor(private router: Router) { }

  login(username, password) {
    return true;
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['/home']);
  }
}
