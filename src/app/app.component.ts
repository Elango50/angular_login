import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'my-app';
  isAuthenticated: boolean;

  constructor(private router: Router) {
    debugger
  }
  ngOnInit(): void {
   
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['login'])
  }

  onActivate(componentReference) {
    console.log(componentReference)
    debugger
    if (!componentReference.searchItem) return;
    // componentReference.anyFunction();
    //Below will subscribe to the searchItem emitter
    componentReference.searchItem.subscribe((data) => {
      if (data) {
        this.isAuthenticated = data;
        this.router.navigate(['home']);
      }
    })
 }

}
