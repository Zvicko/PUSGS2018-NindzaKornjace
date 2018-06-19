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

services:Service[];

  ngOnInit() {
    this.dataService.getUnaprovedServices().subscribe(x=>this.services=x);
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.service.LogoUrl =reader.result;
      }
    }
  }

  OnClick()
  {
      this.dataService.getUnaprovedServices().subscribe(x=>this.services=x);
      this.dataService.addUnaprovedService(this.service);
  }

}
