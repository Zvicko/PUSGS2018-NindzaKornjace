import { Reservation } from "./reservation";


export class User{
    Id:string;
    FirsName:string;
    LastName:string
    Email:string;
    BirthDate:Date;
    Password:string;
    ImageUrl:string;
    Role:Role;
    Aproved:boolean;
    Reservations:Reservation[];
}

export enum Role{
    RegularClient,
    Manager,
    Admin
}