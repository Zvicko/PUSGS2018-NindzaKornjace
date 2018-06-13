import { Reservation } from "./data.service";

export class User{
    FirsName:string;
    LastName:string
    Email:string;
    BirthDate:Date;
    Password:string;
    Reservations:Reservation[];
}