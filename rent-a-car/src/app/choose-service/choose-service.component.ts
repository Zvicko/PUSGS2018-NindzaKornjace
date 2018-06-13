import { Component, OnInit } from '@angular/core';
import {SERVICES} from '../mock-services';
import {DataService} from '../data.service';
import { Service } from '../service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-choose-service',
  templateUrl: './choose-service.component.html',
  styleUrls: ['./choose-service.component.css']
})
export class ChooseServiceComponent implements OnInit {

  services:Service[];
  next:string;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private dataService:DataService) { }

  ngOnInit() {
    
    this.services=this.dataService.getServices();
    if(this.route.toString().indexOf('reservation')!==-1)
    {
      this.next="/reservation/start/choose-branch-office";
    }
    if(this.route.toString().indexOf('add-branch-office')!==-1)
    {
      this.next="/add-branch-office";
    }
    if(this.route.toString().indexOf('add-vehicle')!==-1)
    {
      this.next="/add-vehicle/choose-branch-office";
    }
  }

  OnClick(service:Service)
  {
    if(this.route.toString().indexOf('reservation')!==-1)
    {
      this.dataService.setServiceReservation(service);
    }
    if(this.route.toString().indexOf('add-branch-office')!==-1)
    {
      this.dataService.setSetviceMakeNewBranchOffice(service);
    }
    if(this.route.toString().indexOf('add-vehicle')!==-1)
    {
      this.dataService.setServiceAddVehicle(service);
    }
  }

}
