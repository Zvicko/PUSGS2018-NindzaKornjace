import {Service} from './service';
import { BranchOffice } from './branch-office';
import { Vehicle } from './vehicle';

export const SERVICES: Service[] = [
    { 
        Id:"",
        Name:"Name 1",
        LogoUrl:"",
        Email:"some.email.com 1",
        Description:"Description 1",
        Aproved:true,
        BranchOffices: BranchOffice[2]= [
            {
                Id:"",
                ImageUrl:"",
                Adress:"Adress 1",
                Longitude:23.123,
                Latitude:34.234,
                Vehicles:Vehicle[1]=[
                    {
                        Id:"",
                        IsAvailable:true,
                        Model:"Model 1",
                        Producer:"Producer 1",
                        YearOfProduction:2000,
                        Description:"Description 1",
                        ImageUrl:"",
                        PricePerHour:100
                    }

                ]
            },
            {
                Id:"",
                ImageUrl:"",
                Adress:"Adress 2",
                Longitude:76.123,
                Latitude:56.234,
                Vehicles:Vehicle[1]=[
                    {
                        Id:"",
                        IsAvailable:true,
                        Model:"Model 2",
                        Producer:"Producer 2",
                        YearOfProduction:2000,
                        Description:"Description 2",
                        ImageUrl:"",
                        PricePerHour:100
                    }

                ]
            }
        ]
    }



];