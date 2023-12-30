import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { HttpService } from '../service/httpservice.service';

@Component({
  selector: 'app-gateway',
  templateUrl: './gateway.component.html',
})
export class GatewayComponent {

  fUrl!: string;
  fPath!: string;
  error!: number;
  errorMessage!: string;
  displayUrl!: string;
  displayResponse!: string;
  posts : any;

  constructor(private router: Router, private httpService: HttpService) {
    this.error = 0;
    this.errorMessage = "";
    this.fUrl = "http://gw1.neogiciel.com"
    this.fPath = "/test";
     
  }
  public onSubmitForm() {
    
    console.log('Gateway On Submit Form');
    console.log('url  = '+this.fUrl);
    console.log('path = '+this.fPath);
    
    this.error = 0;
    this.errorMessage = "";
    this.displayUrl = this.fUrl+this.fPath;

    this.httpService.getUrl(this.displayUrl).subscribe(
      (response) => { 
        this.error = 0;
        this.posts = response;
        console.log(this.posts);
        this.displayResponse = JSON.stringify(this.posts);
        console.log('reponse = '+this.displayResponse);
       },
      (error) => { 
          this.error = 1;
          console.log(error); 
          this.displayResponse = JSON.stringify(error);

      });
  }
 
}
