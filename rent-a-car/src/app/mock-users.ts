import { User,Role } from './user';

export const USERS: User[] = [
  {
    Id:"",
    FirsName:"A1",
    LastName:"A1",
    Email:"A1",
    BirthDate:null,
    Password:"A1",
    ImageUrl:"",
    Reservations:[],
    Role:Role.RegularClient,
    Aproved:true

   
  },
  {
    Id:"",
    FirsName:"A2",
    LastName:"A2",
    Email:"A2",
    BirthDate:null,
    Password:"A2",
    ImageUrl:"",
    Reservations:[],
    Role:Role.Manager,
    Aproved:true
},
{
    Id:"",
    FirsName:"A3",
    LastName:"A3",
    Email:"A3",
    BirthDate:null,
    Password:"A3",
    ImageUrl:"",
    Reservations:[],
    Role:Role.Admin,
    Aproved:true
}
];
