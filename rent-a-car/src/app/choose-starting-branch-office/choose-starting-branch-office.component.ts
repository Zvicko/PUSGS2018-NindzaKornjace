import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {DataService} from '../data.service';
import { BranchOffice } from '../branch-office';

@Component({
  selector: 'app-choose-starting-branch-office',
  templateUrl: './choose-starting-branch-office.component.html',
  styleUrls: ['./choose-starting-branch-office.component.css']
})
export class ChooseStartingBranchOfficeComponent implements OnInit {
id:number;
branchOffices:BranchOffice[];

  constructor( private route: ActivatedRoute,private dataService:DataService) { }

  ngOnInit() {
     this.id = +this.route.snapshot.paramMap.get('id');
     this.branchOffices=this.dataService.getBranchOffices(this.id);
  }
  OnClick(branchOfice:BranchOffice)
  {
    this.dataService.setStartBranchOffice(this.id,branchOfice.Adress);
  }

}
