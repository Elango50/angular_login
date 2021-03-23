import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginInvalid = false;
  showSpinner = false;

  @Output() searchItem: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  constructor(private router: Router, private authService: AuthService) {
  }


  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    if (this.form.valid) {
      //TODO
      debugger
      if (this.authService.login('Test', 'test'))
      this.searchItem.emit(true);
      debugger
        
    }
  }
}
