import { Component, OnInit,Input } from '@angular/core';
import {  Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   email:string;
   password:string;

  constructor(private router:Router,private dataService:DataService) { }

  ngOnInit() {
  }

  OnClick():void {
    this.dataService.logIn(this.email,this.password);
    this.router.navigate(["/choose-service"]);
  }
}
