import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-aprove-accounts',
  templateUrl: './aprove-accounts.component.html',
  styleUrls: ['./aprove-accounts.component.css']
})
export class AproveAccountsComponent implements OnInit {

users:User[];


  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private dataService:DataService) { }

  ngOnInit() {
    this.users=this.dataService.getUnaprovedUserAccounts();
  }

  OnClick(user:User)
  {
    this.dataService.aproveUserAccount(user);
  }

}
