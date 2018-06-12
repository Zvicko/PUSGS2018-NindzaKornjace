import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ChooseServiceComponent } from './choose-service/choose-service.component';
import { AppRoutingModule } from './/app-routing.module';
import { ChooseStartingBranchOfficeComponent } from './choose-starting-branch-office/choose-starting-branch-office.component';
import { ChooseCarComponent } from './choose-vehicle/choose-vehicle.component';
import { ChooseEndingBranchOfficeComponent } from './choose-ending-branch-office/choose-ending-branch-office.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    ChooseServiceComponent,
    ChooseStartingBranchOfficeComponent,
    ChooseCarComponent,
    ChooseEndingBranchOfficeComponent
    
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
