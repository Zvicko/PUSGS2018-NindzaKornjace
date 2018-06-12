import { Reservation } from "./data.service";

export class User{
    FirsName:string;
    LastName:string
    Email:string;
    //BirthdDate:Date;
    Password:string;
    Reservations:Reservation[];
}