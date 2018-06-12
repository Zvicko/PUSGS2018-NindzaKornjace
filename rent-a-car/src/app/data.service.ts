import { Injectable } from '@angular/core';
import { SERVICES } from './mock-services';
import { Service } from './service'
import { BranchOffice } from './branch-office';
import { Vehicle } from './vehicle';
import { User } from './user';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  services:Service[]=SERVICES;
  users:User[]=USERS;
  reservation:Reservation=new Reservation();
  logedInUser:User=null;

  constructor() { }

  isLogedIn()
  {
    return this.logedInUser!==null;
  }


  logIn(email:string,password:string):boolean
  {
    var V=this.users.find(x=>x.Email===email);
      if(V.Password===password)
      {
          this.logedInUser=V;
          return true;
      }
      else
      {
          return false;
      }
  }

  logOut()
  {
    this.logedInUser=null;
  }

  getServices():Service[]
  {
    return this.services;
  }

  setService(serviceName:string)
  {
    this.reservation.Service=this.services.find(x=>x.Name===serviceName);
  }

  getBranchOffices():BranchOffice[]
  {
     return this.reservation.Service.BranchOffices;
  }
  
  setStartBranchOffice(adress:string)
  {
    var V=this.reservation;
     V.StartBranchOffice= V.Service.BranchOffices.find(x=>x.Adress===adress);
  }

  setEndBranchOffice(adress:string)
  {
    var V=this.reservation;
    V.EndBranchOffice= V.Service.BranchOffices.find(x=>x.Adress===adress);
  }

  setStartDate(date:Date)
  {
    this.reservation.StartDate=date;
    
  }

  setEndDate(date:Date)
  {
    this.reservation.EndDate=date;
    
  }

  getVehicle():Vehicle[]
  {
    return this.reservation.StartBranchOffice.Vehicles;
    
  }

  setVehicle(model:string)
  {
    var V=this.reservation;
    V.Vehicle=V.StartBranchOffice.Vehicles.find(x=>x.Model===model);
  }


}

export class Reservation{
  Service:Service;
  StartBranchOffice:BranchOffice;
  Vehicle:Vehicle;
  EndBranchOffice:BranchOffice;
  StartDate:Date;
  EndDate:Date;
}
