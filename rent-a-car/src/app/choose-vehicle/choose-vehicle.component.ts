import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../data.service';


@Component({
  selector: 'app-choose-vehicle',
  templateUrl: './choose-vehicle.component.html',
  styleUrls: ['./choose-vehicle.component.css']
})
export class ChooseCarComponent implements OnInit {
  id:number;
  vehicles:Vehicle[];

  constructor(private route: ActivatedRoute,private dataService:DataService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.vehicles=this.dataService.getVehicle(this.id);
  }

  OnClick(vehicle:Vehicle)
  {
    this.dataService.setVehicle(this.id,vehicle.Model);
  }

}
