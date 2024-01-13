import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
})


export class TopComponent {

  constructor(private router: Router) {
   
  }


  logout() {
    localStorage.removeItem('login');
    localStorage.removeItem('password');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);

  }
}
