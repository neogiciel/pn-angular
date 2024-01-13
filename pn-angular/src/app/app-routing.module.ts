import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { ListepersonneComponent } from './entreprise/listepersonne.component';
import { PersonneComponent } from './entreprise/personne.component';
import { ListeserviceComponent } from './entreprise/listeservice.component';


const routes: Routes = [
  { path: '', component: LoginComponent, },
  { path: 'home', component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'listepersonne', component: ListepersonneComponent },
  { path: 'personne', component: PersonneComponent },
  { path: 'listeservice', component: ListeserviceComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
