import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Service } from '../service';

@Component({
  selector: 'app-aprove-services',
  templateUrl: './aprove-services.component.html',
  styleUrls: ['./aprove-services.component.css']
})
export class AproveServicesComponent implements OnInit {

  services:Service[];

  constructor( 
    private route: ActivatedRoute,
    private router:Router,
    private dataService:DataService) { }

  ngOnInit() {
    this.services=this.dataService.getUnaprovedServices();
  }

  OnClick(service:Service)
  {
      this.dataService.aproveService(service);
  }

}
