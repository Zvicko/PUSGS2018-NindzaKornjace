import { Component, OnInit } from '@angular/core';
import { BranchOffice } from '../branch-office';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-choose-branch-office',
  templateUrl: './choose-branch-office.component.html',
  styleUrls: ['./choose-branch-office.component.css']
})
export class ChooseBranchOfficeComponent implements OnInit {

  branchOffices:BranchOffice[];
  next:string;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private dataService:DataService) { }

  ngOnInit() {
    if(this.route.toString().indexOf('add-vehicle')!==-1)
    {
      this.dataService.getBranchOfficesAddVehicle().subscribe(x=>this.branchOffices=x);
      this.next='/add-vehicle';
    }
    if(this.route.toString().indexOf('reservation')!==-1)
    {
      this.dataService.getBranchOfficesReservation().subscribe(x=>this.branchOffices=x);
      if(this.route.toString().indexOf('start')!==-1)
    {
      this.next='/reservation/choose-vehicle';
    }
    if(this.route.toString().indexOf('end')!==-1)
    {
      this.dataService.getBranchOfficesReservation().subscribe(x=>this.branchOffices=x);
      this.next='/reservation/choose-dates';
    }
    }
    if(this.route.toString().indexOf('vehicle-management')!==-1)
    {
      this.dataService.getBranchOfficesVehicleManagement().subscribe(x=>this.branchOffices=x);
      this.next='/vehicle-management';
    }
  }

  OnClick(branchOffice:BranchOffice)
  {
    if(this.route.toString().indexOf('add-vehicle')!==-1)
    {
      this.dataService.setBranchOfficeAddVehicle(branchOffice);
    }
    if(this.route.toString().indexOf('reservation')!==-1)
    {
      if(this.route.toString().indexOf('start')!==-1)
      {
        this.dataService.setStartBranchOfficeReservation(branchOffice);
      }
    
    if(this.route.toString().indexOf('end')!==-1)
    
      {
        this.dataService.setEndBranchOfficeReservation(branchOffice);
      }
    }
    if(this.route.toString().indexOf('vehicle-management')!==-1)
    {
      this.dataService.setBranchOfficeVehicleManagement(branchOffice);
    }
  }

}
