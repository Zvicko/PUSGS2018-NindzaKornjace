import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ChooseServiceComponent } from './choose-service/choose-service.component';
import { AppRoutingModule } from './/app-routing.module';
import { ChooseCarComponent } from './choose-vehicle/choose-vehicle.component';
import { ChooseDatesComponent } from './choose-dates/choose-dates.component';
import { UserReservationsComponent } from './user-reservations/user-reservations.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { AddBranchOfficeComponent } from './add-branch-office/add-branch-office.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { ChooseBranchOfficeComponent } from './choose-branch-office/choose-branch-office.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    ChooseServiceComponent,
    ChooseCarComponent,
    ChooseDatesComponent,
    UserReservationsComponent,
    AddServiceComponent,
    AddBranchOfficeComponent,
    AddVehicleComponent,
    ChooseBranchOfficeComponent
    
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
