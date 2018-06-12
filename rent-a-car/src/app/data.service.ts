import { Injectable } from '@angular/core';
import { SERVICES } from './mock-services';
import {Service} from './service'
import { BranchOffice } from './branch-office';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  services:Service[]=SERVICES;
  counter:number=0;
  selectionSessions:SelectionSession[]=[];



  constructor() { }

  getSelectionSessionId():number
  {
    this.counter++;
    var V=new SelectionSession();
    V.Id=this.counter;
    this.selectionSessions.push(V);
    return V.Id;
  }


  getServices():Service[]
  {
    return this.services;
  }

  setService(id:number,serviceName:string)
  {
    this.selectionSessions.find(x=>x.Id===id).Service=this.services.find(x=>x.Name===serviceName);
  }

  getBranchOffices(id:number):BranchOffice[]
  {
     return this.selectionSessions.find(x=>x.Id===id).Service.BranchOffices;
  }
  
  setStartBranchOffice(id:number,adress:string)
  {
    var V=this.selectionSessions.find(x=>x.Id===id);
     V.StartBranchOffice= V.Service.BranchOffices.find(x=>x.Adress===adress);
  }

  setEndBranchOffice(id:number,adress:string)
  {
    var V=this.selectionSessions.find(x=>x.Id===id);
    V.EndBranchOffice= V.Service.BranchOffices.find(x=>x.Adress===adress);
  }

  setStartDate(id:number,date:Date)
  {
    this.selectionSessions.find(x=>x.Id===id).StartDate=date;
    
  }

  setEndDate(id:number,date:Date)
  {
    this.selectionSessions.find(x=>x.Id===id).EndDate=date;
    
  }

  getVehicle(id:number):Vehicle[]
  {
    return this.selectionSessions.find(x=>x.Id===id).StartBranchOffice.Vehicles;
    
  }

  setVehicle(id:number,model:string)
  {
    var V=this.selectionSessions.find(x=>x.Id===id);
    V.Vehicle=V.StartBranchOffice.Vehicles.find(x=>x.Model===model);
  }


}

export class SelectionSession{
  Id:number;
  Service:Service;
  StartBranchOffice:BranchOffice;
  Vehicle:Vehicle;
  EndBranchOffice:BranchOffice;
  StartDate:Date;
  EndDate:Date;
}
