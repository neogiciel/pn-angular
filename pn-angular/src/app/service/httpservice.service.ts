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


	getPosts(url:string) {

		
		const client_id = "application-test";
		const username = "test";
		const password = "test";
		const grant_type = "password";
		//const client_secret = "JPulosifDBkyzJPejOltpmfi9C76EJ8B";
		const client_secret = "YP1sOmJNWygT7Frmr36GKcaX8qqvisiD";
		
		//const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
		//const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
		//const body = {'client_id': client_id,'username': username, 'password':  password, 'grant_type':  grant_type, 'client_secret':  client_secret};
		//return this.http.post<any>(url, body, headers);
		//private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

		const headers = {'Content-Type': 'application/x-www-form-urlencoded'};
		const body =  {'client_id': client_id,'username': username, 'password':  password, 'grant_type':  grant_type, 'client_secret':  client_secret};
		return this.http.post<any>(url, body, { headers });
	}
	getUrl(url:string) {

		const options = {
			headers: new HttpHeaders({ 
			  'Access-Control-Allow-Origin':'*',
			  //'Bearer':bearer
			})
		  };
		
		return this.http.get(url,options);
	}

	/*getUrlBearer(url:string,bearer:string) {
		
		const headers = { 'Authorization': 'Bearer '+bearer,
		'Access-Control-Allow-Origin': 'http://localhost:4200',
		'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
		'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization' }
        //this.http.get<any>(url, { headers })
        //    .subscribe(data => this.response = data);
		/*const options = {
			headers: new HttpHeaders({ 
			  'Access-Control-Allow-Origin': 'http://localhost:4200',
			  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			  'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
			  'Bearer': bearer
			})
		  };
		
		//return this.http.get(url,options);
		console.log(this.response);
		return this.http.get(url, { headers });
	}*/


	getUrlBearer(url:string,bearer:string) {

		//let auth_token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJkVDVtVTNGRXNYLW5YNDhwM3RyeldhNlRueklzSEtveG4tcTdKRE9WdVRvIn0.eyJleHAiOjE3MDM3NzU0NTEsImlhdCI6MTcwMzc3NTE1MSwianRpIjoiZWYwZGE3YmYtNzE5My00OTk1LWFmMjUtNWJhOTYyZDllNTBhIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MTgxL2F1dGgvcmVhbG1zL015UmVhbG0iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiZDc1OThlZGEtOThjYi00NDhmLTgyZDMtZmMwOTVlN2MyNzE1IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYXBwbGljYXRpb24tdGVzdCIsInNlc3Npb25fc3RhdGUiOiJiOWQ4MmNkNC05Yjg0LTQ1N2QtYjI5Mi1hODU4OGI1MDdkNzkiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtbXlyZWFsbSIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCB3cml0ZSBlbWFpbCBwcm9maWxlIHJlYWQiLCJzaWQiOiJiOWQ4MmNkNC05Yjg0LTQ1N2QtYjI5Mi1hODU4OGI1MDdkNzkiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJ0ZXN0IHRlc3QiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0ZXN0IiwiZ2l2ZW5fbmFtZSI6InRlc3QiLCJmYW1pbHlfbmFtZSI6InRlc3QiLCJlbWFpbCI6InRlc3RAbmVvZ2ljaWVsLmNvbSJ9.WbrRghnFsnT__jn1Q9JvK7s2n-AB27rHARu_lVPeuOaW-0-FylwXTu_KK5FPYY_u6hWcZ7sDsFXdZow7xVPxEMHHeLoCCeCWc3nrcv131dipkx5dvAWRMsDFoRSi6MQa2rUPWMQHMUqStnTwXIkX4ISeqoq4sLUMdKtw8IbHDiJlqfvsoqs9ZUTialiXrZiXADcG0rUXJX6VhPXN_CSbB98WiYfLJQpJsTa4G90G0ZwIMkxWC43TCWcz5mkij4JCz7qy5aCKFeOLZ4clggsUlfcTTRaGAXONuGBWo0ObsW5eAqvWGLrDik7LWXbQ0aYgZn5TBBPWsL7uUnLGA9-DJw";
		//'Content-Type': 'application/json',
		//'Authorization': `Bearer ${bearer}`

		const headers = new HttpHeaders({
			'Access-Control-Allow-Origin':'*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
			'Authorization': `Bearer ${bearer}`
		  });
	
		const requestOptions = { headers: headers };
		this.http.get(url, requestOptions)
			.subscribe((res: any) => {
	
			console.log('Reponse de la Requete :');
			console.log(res);
	
		});
	}
}
