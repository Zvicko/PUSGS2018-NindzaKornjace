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

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.branchOffice.ImageUrl = reader.result;
      }
    }
  }

OnClick()
{
  this.dataService.addBranchOffice(this.branchOffice);
}


}
