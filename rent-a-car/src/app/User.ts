import { Reservation } from "./data.service";

export class User{
    FirsName:string;
    LastName:string
    Email:string;
    BirthDate:Date;
    Password:string;
    ImageUrl:string;
    Role:Role;
    Reservations:Reservation[];
}

export enum Role{
    RegularClient,
    Manager,
    Admin
}