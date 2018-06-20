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
    this.dataService.getUnaprovedUserAccounts().subscribe(x=>this.users=x);
  }

  OnClick(user:User)
  {
    this.dataService.aproveUserAccount(user)
    .subscribe(x=>{
      if(x===1)
      {
        this.dataService.getUnaprovedUserAccounts().subscribe(x=>this.users=x);
      }
    });
  }

}
