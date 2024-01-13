import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.service.html',
  styleUrls: ['./spinner.service.scss']
})

@Injectable({
  providedIn: 'root',
})

export class SpinnerService {

  @Input() public param !: string;
  @Input() public loaded !: any;

  private _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable();
  
  constructor() {
  
  }

  show() {
    this._loading.next(true);
    
  }

  hide() {
    this._loading.next(false);
  }
}
