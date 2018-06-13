import { Component, OnInit,Input } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   email:string;
   password:string;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private dataService:DataService) { }

  ngOnInit() {
  }

  OnClick():void {
    this.dataService.logIn(this.email,this.password);
    if(this.route.toString().indexOf('reservation')===-1){}
    /*
    if(true)
    {
    this.router.navigate(["/choose-service"]);
    }
    else
    {
      
      this.dataService.makeReservation();
      this.router.navigate(["/user-reservations"]);
      
    }
    */
  }
}
