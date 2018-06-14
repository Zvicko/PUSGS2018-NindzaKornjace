import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChooseServiceComponent} from './choose-service/choose-service.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { ChooseVehicleComponent } from './choose-vehicle/choose-vehicle.component';
import { ChooseDatesComponent } from './choose-dates/choose-dates.component';
import { UserReservationsComponent } from './user-reservations/user-reservations.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { AddBranchOfficeComponent } from './add-branch-office/add-branch-office.component';
import { ChooseBranchOfficeComponent } from './choose-branch-office/choose-branch-office.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { AproveServicesComponent } from './aprove-services/aprove-services.component';
import { AproveAccountsComponent } from './aprove-accounts/aprove-accounts.component';
import { VehicleManagementComponent } from './vehicle-management/vehicle-management.component';



const routes: Routes = [
  { path: '', redirectTo: '/choose-service', pathMatch: 'full' },
  { path: 'reservation/choose-service', component: ChooseServiceComponent },
  { path: 'add-branch-office/choose-service', component: ChooseServiceComponent },
  { path: 'add-vehicle/choose-service', component: ChooseServiceComponent }, 
  { path: 'add-vehicle/choose-branch-office', component: ChooseBranchOfficeComponent }, 
  { path: 'add-vehicle' , component: AddVehicleComponent},
  { path: 'reservation/start/choose-branch-office', component: ChooseBranchOfficeComponent }, 
  { path: 'reservation/end/choose-branch-office', component: ChooseBranchOfficeComponent },   
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reservation/login', component: LoginComponent },
  { path: 'reservation/choose-vehicle', component: ChooseVehicleComponent },
  { path: 'reservation/choose-dates', component: ChooseDatesComponent },
  { path: 'user-reservations', component:UserReservationsComponent},
  { path: 'add-service', component:AddServiceComponent},
  { path: 'add-branch-office', component:AddBranchOfficeComponent},
  { path: 'aprove-services',component:AproveServicesComponent},
  { path: 'aprove-accounts',component:AproveAccountsComponent},
  { path: 'vehicle-management/choose-service', component:ChooseServiceComponent},
  { path: 'vehicle-management/choose-branch-office', component:ChooseBranchOfficeComponent},
  { path: 'vehicle-management', component:VehicleManagementComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
