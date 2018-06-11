import { Component, OnInit } from '@angular/core';

import {  Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Username:string;
  Password:string;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  OnClick():void {
    this.router.navigate(["/login/{{this.Username}}/{{this.Password}}"]);
  }
}
