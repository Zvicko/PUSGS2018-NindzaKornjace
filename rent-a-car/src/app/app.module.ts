import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ChooseServiceComponent } from './choose-service/choose-service.component';
import { AppRoutingModule } from './/app-routing.module';
import { ChooseVehicleComponent } from './choose-vehicle/choose-vehicle.component';
import { ChooseDatesComponent } from './choose-dates/choose-dates.component';
import { UserReservationsComponent } from './user-reservations/user-reservations.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { AddBranchOfficeComponent } from './add-branch-office/add-branch-office.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { ChooseBranchOfficeComponent } from './choose-branch-office/choose-branch-office.component';
import { AproveServicesComponent } from './aprove-services/aprove-services.component';
import { AproveAccountsComponent } from './aprove-accounts/aprove-accounts.component';
import { VehicleManagementComponent } from './vehicle-management/vehicle-management.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    ChooseServiceComponent,
    ChooseVehicleComponent,
    ChooseDatesComponent,
    UserReservationsComponent,
    AddServiceComponent,
    AddBranchOfficeComponent,
    AddVehicleComponent,
    ChooseBranchOfficeComponent,
    AproveServicesComponent,
    AproveAccountsComponent,
    VehicleManagementComponent
    
     //ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
