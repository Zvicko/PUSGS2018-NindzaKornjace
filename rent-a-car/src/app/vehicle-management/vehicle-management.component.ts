import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-vehicle-management',
  templateUrl: './vehicle-management.component.html',
  styleUrls: ['./vehicle-management.component.css']
})
export class VehicleManagementComponent implements OnInit {

vehicles:Vehicle[];

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private dataService:DataService) { }

  ngOnInit() {
    this.vehicles=this.dataService.getVehiclesVehicleManagement();
  }

}
