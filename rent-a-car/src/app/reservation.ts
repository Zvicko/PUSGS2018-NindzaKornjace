import { Service } from "./service";
import { Vehicle } from "./vehicle";
import { BranchOffice } from "./branch-office";


export class Reservation{
    Id:string;
    Service:Service;
    StartBranchOffice:BranchOffice;
    Vehicle:Vehicle;
    EndBranchOffice:BranchOffice;
    StartDate:Date;
    EndDate:Date;
  }
  