import { Component, OnInit,Input } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   email:string="";
   password:string="";

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private dataService:DataService) { }

  ngOnInit() {
    this.dataService.loginReturnMessage=null;
  }

  OnClick():void {
    this.dataService.logIn(this.email,this.password)
    .subscribe(x=>{
      if(x.responce===3)
      {
        this.dataService.logedInUser=x.user;
        if(this.route.toString().indexOf('reservation')===-1)
        {
        this.router.navigate(["/reservation/choose-service"]);
        }
        else
        {
          
          this.dataService.makeReservation();
          this.router.navigate(["/user-reservations"]);
          
        }
      }
      if(x.responce===1)
      {
        this.dataService.loginReturnMessage="This user is not subscribed.";
      }
      if(x.responce===2)
      {
        this.dataService.loginReturnMessage="This user is allready loged in.";
      }
      if(x.responce===4)
      {
        this.dataService.loginReturnMessage="Wrong password.";
      }
    });
   
    
  }
}
