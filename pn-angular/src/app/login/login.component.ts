import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../service/httpservice.service';
import { HttpKeycloack } from '../service/httpkeycloack.service';

import { Personne } from '../model/personne';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  fLogin!: string;
  fPassword!: string;
  error!: number;
  errorMessage!: string;
  

  constructor(private router: Router,private http: HttpService) {
    this.error = 0;
    this.errorMessage = "";
    this.fLogin = "admin";
    this.fPassword = "admin";
   
  }

  getData()  {

    const httpKeycloack = new HttpKeycloack();
    const url = httpKeycloack.login(this.fLogin,this.fPassword);
    
    let promise = new Promise((resolve, reject) => {
      this.http.getUrl(url)
      .toPromise()
      .then(
        response => { // Success
          //console.log(response);
          const obj = JSON.parse(JSON.stringify(response));
          if (typeof obj.access_token == 'undefined') {
            this.error = 1;
            this.errorMessage = "Erreur de login";
            //console.log('erreur');
          }else if (obj.access_token == '') {
            this.error = 1;
            this.errorMessage = "Erreur de login";
            //console.log('erreur');
          }else{
            localStorage.setItem('login', this.fLogin);
            localStorage.setItem('password', this.fPassword);
            localStorage.setItem('access_token', obj.access_token);
            localStorage.setItem('refresh_token', obj.refresh_token);
            this.router.navigate(['/home']);
          }
        },
        msg => { // Error
          reject(msg);
          }
      );
    });

    console.log("Erreur = "+this.error );
    return promise;
  }

/*
  async getListe() {
    const httpKeycloack = new HttpKeycloack();
    const url = httpKeycloack.login(this.fLogin,this.fPassword);
    
    this.http.getUrl(url).subscribe(
      (response) => { 
        //console.log(response);
        const obj = JSON.parse(JSON.stringify(response));
        
        if (typeof obj.access_token == 'undefined') {
          this.error = 1;
          this.errorMessage = "Erreur de login";
          console.log('affiche erreur');
        }else{
          console.log('local storage');
          localStorage.setItem('login', this.fLogin);
          localStorage.setItem('password', this.fPassword);
          localStorage.setItem('access_token', obj.access_token);
          localStorage.setItem('refresh_token', obj.refresh_token);
          this.router.navigate(['/home']);
        }

       },
      (error) => { 
          console.log(error); 
          this.error = 1;
          this.errorMessage = "Erreur de login";
          console.log('erreur ');
      });
  }*/


  onSubmitForm() {
      //this.getListe();
      this.getData();
      
    }
}
