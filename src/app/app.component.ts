import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { EventEmiterService } from './event-emiter.service';
import { LocalStorageService } from './local-storage.service';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'my-app';
  isAuthenticated: boolean = false;
  currentUser: User;

  constructor(private router: Router, private eventservice: EventEmiterService, private localStorageService: LocalStorageService, private http: HttpClient) {

    debugger
    this.eventservice.changeEmitted$.subscribe(
      user => {
        debugger
        this.currentUser = user;
        this.isAuthenticated = user.isValid;
        this.router.navigate(['home']);
        alert('received..');
      });

    if (!this.isAuthenticated) this.logout();

  }
  ngOnInit(): void {
  }

  logout() {
    this.isAuthenticated = false;
    this.localStorageService.clearSession();
    this.router.navigate(['login'])
  }

}
