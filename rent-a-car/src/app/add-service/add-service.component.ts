import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  service:Service=new Service();

  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  OnClick()
  {
      this.dataService.addService(this.service);
  }

}
