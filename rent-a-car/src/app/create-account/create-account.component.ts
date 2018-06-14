import { Component, OnInit } from '@angular/core';

import {  Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  user:User=new User();
  
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private dataService:DataService) {  }

  ngOnInit() {
    this.user.Reservations=[];
  }

  
  
  OnClick():void {
      this.dataService.createUserAccount(this.user);
  }

}
