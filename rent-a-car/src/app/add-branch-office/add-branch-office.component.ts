import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { BranchOffice } from '../branch-office';

@Component({
  selector: 'app-add-branch-office',
  templateUrl: './add-branch-office.component.html',
  styleUrls: ['./add-branch-office.component.css']
})
export class AddBranchOfficeComponent implements OnInit {

branchOffice:BranchOffice=new BranchOffice();


  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

OnClick()
{
  this.dataService.addBranchOffice(this.branchOffice);
}


}
