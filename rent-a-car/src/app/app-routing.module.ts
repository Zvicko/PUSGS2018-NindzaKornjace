import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChooseServiceComponent} from './choose-service/choose-service.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { ChooseStartingBranchOfficeComponent } from './choose-starting-branch-office/choose-starting-branch-office.component';
import { ChooseEndingBranchOfficeComponent  } from './choose-ending-branch-office/choose-ending-branch-office.component';
import { ChooseCarComponent } from './choose-vehicle/choose-vehicle.component';
import { ChooseDatesComponent } from './choose-dates/choose-dates.component';
import { UserReservationsComponent } from './user-reservations/user-reservations.component';



const routes: Routes = [
  { path: '', redirectTo: '/choose-service', pathMatch: 'full' },
  { path: 'create-account/:Username/:Password', redirectTo: '/choose-service', pathMatch: 'full' },
  { path: 'choose-service', component: ChooseServiceComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reservation/login', component: LoginComponent },
  { path: 'choose-starting-branch-office', component: ChooseStartingBranchOfficeComponent },
  { path: 'choose-vehicle', component: ChooseCarComponent },
  { path: 'choose-ending-branch-office', component: ChooseEndingBranchOfficeComponent },
  { path: 'choose-dates', component: ChooseDatesComponent },
  { path: 'user-reservations', component:UserReservationsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
