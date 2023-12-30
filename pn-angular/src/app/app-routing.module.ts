import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { GatewayComponent } from './gateway/gateway.component';
import { LocalComponent } from './local/local.component';
import { SecuriteComponent } from './securite/securite.component';

const routes: Routes = [
  { path: '', component: LoginComponent, },
  { path: 'home', component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'gateway', component: GatewayComponent },
  { path: 'local', component: LocalComponent },
  { path: 'securite', component: SecuriteComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
