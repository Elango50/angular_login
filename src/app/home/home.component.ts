import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { EventEmiterService } from '../event-emiter.service';
import { LocalStorageService } from '../local-storage.service';
import { User } from '../model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user : User;
  
  constructor(private localStorageService: LocalStorageService) {
   }

  ngOnInit(): void {
    this.user = this.localStorageService.loadUserFromLocalStorage();
     }

  

}
