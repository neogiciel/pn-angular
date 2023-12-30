import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  fLogin!: string;
  fPassword!: string;
  error!: number;
  errorMessage!: string;
  

  constructor(private router: Router) {
    this.error = 0;
    this.errorMessage = "";
    this.fLogin = "admin";
    this.fPassword = "admin";
  
    
  }

  onTest() {
    //this.spinner.show();
    //this.spinner.hide();

  }


  onSubmitForm() {
    
    console.log('Login : onSubmitForm');

    if ((this.fLogin === "admin") && (this.fPassword === "admin")) {
      //console.log("Login OK");
      localStorage.setItem('rove', 'admin');
      
      this.router.navigate(['/home']);
    } else {
      //console.log("Erreur de login");
      this.error = 1;
      this.errorMessage = "Erreur de login";
      console.log('erreur ');
    }

  }
}
