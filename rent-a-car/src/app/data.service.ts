import { Injectable } from '@angular/core';
import { SERVICES } from './mock-services';
import { Service } from './service'
import { BranchOffice } from './branch-office';
import { Vehicle } from './vehicle';
import { User, Role } from './user';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  services:Service[]=SERVICES;
  users:User[]=USERS;
  reservation:Reservation=new Reservation();
  reservations:Reservation[]=[];
  logedInUser:User=null;

  serviceAddBranchOffice:Service=new Service();

  serviceAddVehicle:Service=new Service();
  branchOfficeAddVehicle:BranchOffice=new BranchOffice();

  unaprovedUserAccounts:User[]=[];
  unaprovedServices:Service[]=[];

  serviceVehicleManagement:Service;
  branchOfficeVehicleManagement:BranchOffice;

  constructor() { }

setServiceVehicleManagement(service:Service)
{
this.serviceVehicleManagement=service;
}

getBranchOfficesVehicleManagement():BranchOffice[]
{
 return this.serviceVehicleManagement.BranchOffices;
}

setBranchOfficeVehicleManagement(branchOffice:BranchOffice)
{
  this.branchOfficeVehicleManagement=branchOffice;
}

getVehiclesVehicleManagement():Vehicle[]
{
 return this.branchOfficeVehicleManagement.Vehicles;
}


isAdmin():boolean
{
  return this.logedInUser.Role===Role.Admin
}

isManager():boolean
{
  return this.logedInUser.Role===Role.Manager
}

getUnaprovedUserAccounts():User[]
{
  return this.unaprovedUserAccounts;
}

getUserAccounts():User[]
{
  return this.users;
}

createUserAccount(user:User)
{
  this.unaprovedUserAccounts.push(user);
}

aproveUserAccount(user:User)
{
  var index = this.unaprovedUserAccounts.indexOf(user);   
  this.unaprovedUserAccounts.splice(index, 1);
  this.users.push(user);
}

getUnaprovedServices():Service[]
{
  return this.unaprovedServices;
}

addUnaprovedService(service:Service)
{
  this.unaprovedServices.push(service);
}

aproveService(service:Service)
{
  var index = this.unaprovedServices.indexOf(service);   
  this.unaprovedServices.splice(index, 1);
  this.services.push(service);
}


  isLogedIn()
  {
    return this.logedInUser!==null;
  }


  setServiceAddVehicle(service:Service)
  {
    this.serviceAddVehicle=service;
  }

  getBranchOfficesAddVehicle():BranchOffice[]
  {
    return this.serviceAddVehicle.BranchOffices;
  }

  setBranchOfficeAddVehicle(branchOffice:BranchOffice)
  {
     this.branchOfficeAddVehicle=branchOffice;
  }

  addVehicle(vehicle:Vehicle)
  {
    this.branchOfficeAddVehicle.Vehicles.push(vehicle);
  }

  addService(newService:Service)
  {
    this.services.push(newService);
  }

  setSetviceMakeNewBranchOffice(service:Service)
  {
    this.serviceAddBranchOffice=service;
  }

  addBranchOffice(branchOffice:BranchOffice)
  {
    this.serviceAddBranchOffice.BranchOffices.push(branchOffice);
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


getLogedInUsersReservations():Reservation[]
{
  
  return this.logedInUser.Reservations;
  
}

  makeReservation()
  {
    this.logedInUser.Reservations.push(this.reservation);
    this.reservations.push(this.reservation);
  }

  logOut()
  {
    this.logedInUser=null;
  }

  getServices():Service[]
  {
    return this.services;
  }

  setServiceReservation(service:Service)
  {
    this.reservation.Service=service;
  }

  getBranchOfficesReservation():BranchOffice[]
  {
     return this.reservation.Service.BranchOffices;
  }
  
  setStartBranchOfficeReservation(branchOffice:BranchOffice)
  {
    var V=this.reservation;
     V.StartBranchOffice= branchOffice;
  }

  setEndBranchOfficeReservation(branchOffice:BranchOffice)
  {
    var V=this.reservation;
    V.EndBranchOffice= branchOffice;
  }

  setStartDate(date:Date)
  {
    this.reservation.StartDate=date;
    
  }

  setEndDate(date:Date)
  {
    this.reservation.EndDate=date;
    
  }

  getVehiclesReservation():Vehicle[]
  {
    return this.reservation.StartBranchOffice.Vehicles;
    
  }

  setVehicle(vechicle:Vehicle)
  {
    this.reservation.Vehicle=vechicle;
    
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
