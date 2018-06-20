import { Reservation } from "./reservation";


export class User{
    Id:string;
    FirsName:string;
    LastName:string
    Email:string;
    BirthDate:Date;
    Password:string;
    ImageUrl:string;
    Role:string;
    Aproved:boolean;
    Reservations:Reservation[];
}
