import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChooseServiceComponent} from './choose-service/choose-service.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path: '', redirectTo: '/choose-service', pathMatch: 'full' },
  { path: 'login/:Username/:Password', redirectTo: '/choose-service', pathMatch: 'full' },
  { path: "create-account/:Username/:Password", redirectTo: '/choose-service', pathMatch: 'full' },
  { path: 'choose-service', component: ChooseServiceComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
