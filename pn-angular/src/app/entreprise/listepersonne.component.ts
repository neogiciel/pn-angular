import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { HttpService } from '../service/httpservice.service';
import { HttpKeycloack } from '../service/httpkeycloack.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-listepersonne',
  templateUrl: './listepersonne.component.html',
  
})
export class ListepersonneComponent {
  url!: string;
  urlapi!: string;
  token!: string;
  refreshtoken!: string;
  error!: number;
  liste!: Personne[];
  httpKeycloack!: HttpKeycloack;
  
  constructor(private router: Router, private httpService: HttpService) {
    this.error = 0;
    this.httpKeycloack = new HttpKeycloack();
    this.urlapi  = this.httpKeycloack.getUrlApi("/api/liste");
    
  }

  getData(){
    // Mettre ici le code à exécuter lors de l'initialisation du composant
    console.log('[getData] url = '+this.urlapi);
    this.token = localStorage.getItem('access_token') || this.token;
    this.refreshtoken = localStorage.getItem('refresh_token') || this.refreshtoken;

    this.httpService.getUrlBearer(this.urlapi,this.token).subscribe(
      (response) => { 
        this.error = 0;
        console.log(JSON.stringify(response));
        console.log("Reponse OK"); 
        this.liste = JSON.parse(JSON.stringify(response));

       },
      (error) => { 
        this.url  =  this.httpKeycloack.refresh(this.refreshtoken);
        console.log("url = "+this.url); 
        this.httpService.getUrl(this.url).subscribe(
          (response) => { 
            this.error = 0;
            console.log(JSON.stringify(response));
            console.log("Reponse OK"); 
              const obj = JSON.parse(JSON.stringify(response));
              localStorage.setItem('access_token', obj.access_token);
              localStorage.setItem('refresh_token', obj.refresh_token);

              this.httpService.getUrlBearer(this.urlapi,obj.access_token).subscribe(
                (response) => { 
                  this.error = 0;
                  console.log("Reponse OK"); 
                  this.liste = JSON.parse(JSON.stringify(response));
              },
              (error) => { 
                this.error = 1;
                localStorage.removeItem("login");
                localStorage.removeItem("password");
                localStorage.removeItem("access_token");
                localStorage.removeItem("refresh_token");
                console.log("Redirect URL"); 
                this.router.navigate(['/']);
              }
             );

           },
          (error) => { 
            this.error = 1;
            localStorage.removeItem("login");
            localStorage.removeItem("password");
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            console.log("Redirect URL"); 
            this.router.navigate(['/']);
          }
        );   
      });
  }

  ngOnInit() {
    this.getData();
  }

 
}
