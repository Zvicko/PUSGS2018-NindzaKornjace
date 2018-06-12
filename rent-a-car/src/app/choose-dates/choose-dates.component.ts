import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {DataService} from '../data.service';

@Component({
  selector: 'app-choose-dates',
  templateUrl: './choose-dates.component.html',
  styleUrls: ['./choose-dates.component.css']
})
export class ChooseDatesComponent implements OnInit {


StartDate:Date;
EndDate:Date;


  constructor(private route: ActivatedRoute,private dataService:DataService) { }

  ngOnInit() {
  }

  OnClick()
  {
    this.dataService.setStartDate(this.StartDate);
    this.dataService.setEndDate(this.EndDate);
  }

}
