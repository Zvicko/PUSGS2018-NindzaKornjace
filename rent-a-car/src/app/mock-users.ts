import { User,Role } from './user';

export const USERS: User[] = [
  {
    Guid:"",
    FirsName:"A1",
    LastName:"A1",
    Email:"A1",
    BirthDate:null,
    Password:"A1",
    ImageUrl:"",
    Reservations:[],
    Role:Role.RegularClient

   
  },
  {
    Guid:"",
    FirsName:"A2",
    LastName:"A2",
    Email:"A2",
    BirthDate:null,
    Password:"A2",
    ImageUrl:"",
    Reservations:[],
    Role:Role.Manager
},
{
    Guid:"",
    FirsName:"A3",
    LastName:"A3",
    Email:"A3",
    BirthDate:null,
    Password:"A3",
    ImageUrl:"",
    Reservations:[],
    Role:Role.Admin
}
];
