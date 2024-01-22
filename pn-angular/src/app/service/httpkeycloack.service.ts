import { Injectable } from  '@angular/core';
import { HttpService } from '../service/httpservice.service';

@Injectable({
providedIn:  'root'
})

export class HttpKeycloack {

	url!: string;
	client_id!: string;
	grant_type!: string;
	client_secret!: string;
	
	constructor() {
		//this.url = "http://localhost:8089";
		this.url = "http://gw2.neogiciel.com";
		this.client_id = "application-test";
		this.grant_type = "password";
		this.client_secret = "qNjyFMmpRKtPafLhODI0S8863SXm8Fis";
		
	}
		
	
	login(login:string,password:string) {

		console.log('login =  '+login);
		console.log('password =  '+password);

		//const url = "http://gw2.neogiciel.com/gettoken?client_id=application-test&username=test&password=test&client_secret=JPulosifDBkyzJPejOltpmfi9C76EJ8B";
		//const url = "http://gw2.neogiciel.com/gettoken?client_id=application-test&username="+login+"&password="+password+"&client_secret=JPulosifDBkyzJPejOltpmfi9C76EJ8B";
		const url = this.url+"/gettoken?client_id="+this.client_id+"&username="+login+"&password="+password+"&client_secret="+this.client_secret;
		console.log('url =  '+url);
		return url;
	
	}
	

	refresh(refresh:string) {
		const url = this.url+"/refreshtoken?client_id=application-test&client_secret="+this.client_secret+"&refresh_token="+refresh;
		return url;
	}


	getUrlApi(api:string) {
		return this.url+api;
		//return this.url+api;
	}

}
