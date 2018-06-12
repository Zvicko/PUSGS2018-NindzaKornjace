import { Component, OnInit } from '@angular/core';
import {SERVICES} from '../mock-services';
import {DataService} from '../data.service';
import { Service } from '../service';


@Component({
  selector: 'app-choose-service',
  templateUrl: './choose-service.component.html',
  styleUrls: ['./choose-service.component.css']
})
export class ChooseServiceComponent implements OnInit {

  services:Service[];
  

  constructor(private dataService:DataService) { }

  ngOnInit() {
    
    this.services=this.dataService.getServices();
  }

  OnClick(service:Service)
  {
    this.dataService.setService(service.Name);
  }

}
