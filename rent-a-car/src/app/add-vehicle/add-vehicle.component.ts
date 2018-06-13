import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  vehicle:Vehicle=new Vehicle();

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private dataService:DataService) { }

  ngOnInit() {

  }

  OnClick()
  {
    this.dataService.addVehicle(this.vehicle);
  }

}
