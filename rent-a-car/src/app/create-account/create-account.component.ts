import { Component, OnInit } from '@angular/core';

import {  Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  Username:string;
  Password:string;
  ConfirmPassword:string;

  
  constructor(private router:Router) {  }

  ngOnInit() {
  }

  OnClick():void {
    this.router.navigate(["/create-account/{{this.Username}}/{{this.Password}}"]);
  }

}
