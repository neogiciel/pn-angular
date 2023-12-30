import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { HttpService } from '../service/httpservice.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
})
export class LocalComponent {
  
  //Url keycloak
  keycloackUrlToken!: string;
  keycloackUrlInfo!: string;
  token!: string;
  //Url keycloak
  client_id!: string;
  client_secret!: string;
  fLogin!: string;
  fPassword!: string;
  fBearer!: string;
  

  //Gestion des erreurs
  error1!: number;
  error2!: number;
  errorMessage!: string;
  displayResponse!: string;
  posts : any;

  constructor(private router: Router, private httpService: HttpService) {
    this.error1 = 0;
    this.error2 = 0;
    this.errorMessage = "";
    
    //this.keycloackUrlToken = "http://key.neogiciel.com/realms/master/protocol/openid-connect/token";
    //this.keycloackUrlInfo = "http://key.neogiciel.com/realms/master/protocol/openid-connect/userinfo";
    
    this.keycloackUrlToken = "http://gw2.neogiciel.com/gettoken?client_id=application-test&username=test&password=test&client_secret=JPulosifDBkyzJPejOltpmfi9C76EJ8B";
    this.keycloackUrlInfo = "http://gw2.neogiciel.com/auth";
    
    //this.keycloackUrlToken = "http://gw2.neogiciel.com/gettoken?client_id=application-test&username=test&password=test&client_secret=JPulosifDBkyzJPejOltpmfi9C76EJ8B";
    //this.keycloackUrlInfo = "http://gw2.neogiciel.com/auth";
    
  }
  public onSubmitForm() {
    
    console.log('*************** Etape 1 *****************');
    console.log('fLogin  = '+this.fLogin);
    console.log('fPassword = '+this.fPassword);
    
    this.error1 = 0;
    this.error2 = 1;
    this.errorMessage = "";

    this.httpService.getUrl(this.keycloackUrlToken).subscribe(
      (response) => { 
        this.error1 = 0;
        this.posts = response;
        console.log(this.posts);
        this.displayResponse = JSON.stringify(this.posts);
        console.log('reponse = '+this.displayResponse);
       },
      (error) => { 
          this.error1 = 1;
          console.log(error); 
          this.displayResponse = JSON.stringify(error);

      });

    /*this.httpService.getPosts(this.keycloackUrlToken).subscribe(
      (response) => { 
        this.error1 = 0;
        this.posts = response;
        console.log(this.posts);
        this.displayResponse = JSON.stringify(this.posts);
        console.log('reponse = '+this.displayResponse);
       },
      (error) => { 
        this.error1 = 1;
        this.displayResponse = JSON.stringify(error);
        console.log("ERREUR = "+this.displayResponse); 
      });*/
  }

  public onBearerForm() {
    
    console.log('*************** Etape 2 *****************');
    //console.log('fBearer  = '+this.fBearer);
    
    
    this.error1 = 1;
    this.error2 = 0;
    this.errorMessage = "";

    /*this.httpService.getUrlBearer(this.keycloackUrlInfo,this.fBearer).subscribe(
    //this.httpService.getUrlBearer(this.keycloackUrlToken,this.fBearer).subscribe(
      (response) => { 
        this.error2 = 0;
        this.posts = response;
        console.log(this.posts);
        this.displayResponse = JSON.stringify(this.posts);
        console.log('reponse = '+this.displayResponse);
       },
      (error) => { 
          this.error2 = 1;
          console.log(error); 
          this.displayResponse = JSON.stringify(error);

      });*/

      this.httpService.getUrlBearer(this.keycloackUrlInfo,this.fBearer);
  }


 
}
