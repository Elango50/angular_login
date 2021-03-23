import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth.service';
import { EventEmiterService } from '../event-emiter.service';
import { LocalStorageService } from '../local-storage.service';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginInvalid: boolean = false;
  showSpinner: false;
  userDetails = new User();
  isAuthenticated: boolean;

  @Output() searchItem: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.localStorageService.clearSession();
  }

  constructor(private router: Router, private eventService: EventEmiterService, private authService: AuthService, private localStorageService: LocalStorageService) {
    // this.localStorageService.clearSession();
  }


  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {

    if (this.form.valid) {
      //TODO
      this.userDetails.id = this.form.value.username;
      this.userDetails.password = this.form.value.password;

      this.authService.validateUser(this.userDetails).subscribe({
        next: (result: any) => {
          //TODO
          // this.loginInvalid = this.isAuthenticated = (result.toLowerCase == 'YES'.toLowerCase()) ? false : true;
          this.isAuthenticated = true;
          if (!this.isAuthenticated) return false;
          this.userDetails.isValid = this.isAuthenticated;
          this.userDetails.password = '';
          this.localStorageService.storeOnLocalStorage(this.userDetails);
          this.userDetails = this.localStorageService.loadUserFromLocalStorage();
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => {
          console.log("çomplete");
          if (this.isAuthenticated) {
            this.eventService.emitChange(this.userDetails);
          }
          console.log('complete');
        }
      });

    }
  }
}
