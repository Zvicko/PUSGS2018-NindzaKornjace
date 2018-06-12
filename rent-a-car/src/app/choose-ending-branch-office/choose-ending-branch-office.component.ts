import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {DataService} from '../data.service';
import { BranchOffice } from '../branch-office';

@Component({
  selector: 'app-choose-ending-branch-office',
  templateUrl: './choose-ending-branch-office.component.html',
  styleUrls: ['./choose-ending-branch-office.component.css']
})
export class ChooseEndingBranchOfficeComponent implements OnInit {

  id:number;
  branchOffices:BranchOffice[];

  constructor(private route: ActivatedRoute,private dataService:DataService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.branchOffices=this.dataService.getBranchOffices(this.id);
  }

  OnClick(branchOfice:BranchOffice)
  {
    this.dataService.setEndBranchOffice(this.id,branchOfice.Adress);
  }

}
