import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../data.service';


@Component({
  selector: 'app-choose-vehicle',
  templateUrl: './choose-vehicle.component.html',
  styleUrls: ['./choose-vehicle.component.css']
})
export class ChooseVehicleComponent implements OnInit {

  vehicles:Vehicle[];

  constructor(private route: ActivatedRoute,private dataService:DataService) { }

  ngOnInit() {
    this.vehicles=this.dataService.getVehiclesReservation();
    
  }

  OnClick(vehicle:Vehicle)
  {
    
    this.dataService.setVehicle(vehicle);
    

      
  }

}
