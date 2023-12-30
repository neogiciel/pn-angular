import { Component } from '@angular/core';
import { HttpService } from '../service/httpservice.service';

@Component({
selector: 'app-test',
templateUrl: './test.component.html',
})

export  class  TestComponent {
  title = 'Article by Jeetendra';
  
  fUrl!: string;
  fPath!: string;
  error!: number;
  errorMessage!: string;
  displayResponse!: string;
  posts : any;
  
  
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    console.log("TestComponent : ngOnInit")  ;

    
  }

  public onSubmitForm() {
    console.log("TestComponent : onSubmitForm")  ;

    
    console.log(this.posts);
  }

}

