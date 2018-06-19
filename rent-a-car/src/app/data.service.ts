import { Injectable, OnInit } from '@angular/core';
import { SERVICES } from './mock-services';
import { Service } from './service'
import { BranchOffice } from './branch-office';
import { Vehicle } from './vehicle';
import { User, Role } from './user';
import { USERS } from './mock-users';
import { Reservation } from "./reservation";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  URLServer:string="http://localhost:51680"
  URLServices:string=this.URLServer+"/api/Services";
  URLBranchOffices:string=this.URLServer+"/api/BranchOffices";
  URLVehicles:string=this.URLServer+"/api/Vehicles";

  services:Service[];
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

  constructor(private httpClient:HttpClient) { }

 


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
  if(this.logedInUser===null || this.logedInUser===undefined)
  {
    return false;
  }
  return this.logedInUser.Role===Role.Admin
}

isManager():boolean
{
  if(this.logedInUser===null || this.logedInUser===undefined)
  {
    return false;
  }
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

getUnaprovedServices():Observable<Service[]>
{
  return this.httpClient.get<Service[]>(this.URLServices+'/Unaproved');
 
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

  getAprovedServices(): Observable<Service[]>
  {
    return this.httpClient.get<Service[]>(this.URLServices+"/Aproved");
    
  }

  setServiceReservation(service:Service)
  {
    this.reservation.Service=service;
  }

  getBranchOfficesReservation():Observable<BranchOffice[]>
  {

    return this.httpClient.get<BranchOffice[]>(this.URLBranchOffices+'/FromService/'+this.reservation.Service.Id);
    
    }
  
  setStartBranchOfficeReservation(branchOffice:BranchOffice)
  {
    this.reservation.StartBranchOffice= branchOffice;
  }

  setEndBranchOfficeReservation(branchOffice:BranchOffice)
  {
    this.reservation.EndBranchOffice= branchOffice;
  }

  setStartDate(date:Date)
  {
    this.reservation.StartDate=date;
    
  }

  setEndDate(date:Date)
  {
    this.reservation.EndDate=date;
    
  }

  getVehiclesReservation():Observable<Vehicle[]>
  {
    return this.httpClient.get<Vehicle[]>(this.URLVehicles+'/FromBranchOffice/'+this.reservation.StartBranchOffice.Id);
    
    
  }

  setVehicle(vechicle:Vehicle)
  {
    this.reservation.Vehicle=vechicle;
    
  }


}


