import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { HttpService } from '../service/httpservice.service';
import { HttpKeycloack } from '../service/httpkeycloack.service';
import { Personne } from '../model/personne';


@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
})
export class PersonneComponent {
  url!: string;
  token!: string;
  error!: number;
  liste!: Personne[];
  
  constructor(private route: ActivatedRoute,private router: Router, private httpService: HttpService) {
    this.error = 0;
    const httpKeycloack = new HttpKeycloack();
    this.url  = httpKeycloack.getUrlApi("/api/liste")
  }

  getData(){
    // Mettre ici le code à exécuter lors de l'initialisation du composant
    console.log('url = '+this.url);
    this.token = localStorage.getItem('access_token') || this.token;

    this.httpService.getUrlBearer(this.url,this.token).subscribe(
      (response) => { 
        this.error = 0;
        //console.log(JSON.stringify(response));
        this.liste = JSON.parse(JSON.stringify(response));

       },
      (error) => { 
          this.error = 1;
          console.log("Erreur = "+ error); 

          localStorage.removeItem("login");
          localStorage.removeItem("password");
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          
      });
  }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      console.log(params); // { orderby: "price" }
      console.log(params['id']);

    });
  }

    //const httpKeycloack = new HttpKeycloack();
    //this.url  = httpKeycloack.getUrlApi("/api/liste")

    //this.getData();
  

 
}
