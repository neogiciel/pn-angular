import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Injectable } from  '@angular/core';

const optionRequete = {
	headers: new HttpHeaders({ 
	  'Access-Control-Allow-Origin':'*',
	  'mon-entete-personnalise':'maValeur'
	})
  };

@Injectable({
providedIn:  'root'
})

export class HttpService {

	response!: string;
  
	
constructor(private http: HttpClient) { }

	//getPosts
	getPosts(url:string) {
		const client_id = "application-test";
		const username = "test";
		const password = "test";
		const grant_type = "password";
		const client_secret = "YP1sOmJNWygT7Frmr36GKcaX8qqvisiD";
		//headers
		const headers = {'Content-Type': 'application/x-www-form-urlencoded'};
		const body =  {'client_id': client_id,'username': username, 'password':  password, 'grant_type':  grant_type, 'client_secret':  client_secret};
		return this.http.post<any>(url, body, { headers });
	}
	//getUrl
	getUrl(url:string) {

		const options = {
			headers: new HttpHeaders({ 
			  'Access-Control-Allow-Origin':'*',
			  //'Bearer':bearer
			})
		  };
		
		return this.http.get(url,options);
	}

	//getUrlBearer	
	getUrlBearer(url:string,bearer:string) {

		const headers = new HttpHeaders({
			'Access-Control-Allow-Origin':'*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
			'Authorization': `Bearer ${bearer}`
		  });
	
		const requestOptions = { headers: headers };
		return this.http.get(url, requestOptions);
	}
}
