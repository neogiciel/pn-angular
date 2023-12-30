import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { MenuComponent } from './menu/menu.component';
import { TestComponent } from './test/test.component';
import { GatewayComponent } from './gateway/gateway.component';
import { LocalComponent } from './local/local.component';
import { SecuriteComponent } from './securite/securite.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TopComponent,
    BottomComponent,
    MenuComponent,
    TestComponent,
    GatewayComponent,
    LocalComponent,
    SecuriteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
