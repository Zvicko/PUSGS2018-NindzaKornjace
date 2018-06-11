import {Service} from './service';
import { BranchOffice } from './branch-office';
import { Car } from './car';

export const Services: Service[] = [
    { 
        Name:"Name",
        LogoUrl:"",
        Email:"some.email.com",
        Description:"Description 1",
        BranchOffices: [
            {
                ImageUrl:"",
                Adress:"Adress 1",
                Longitude:23.123,
                Latitude:34.234,
                Cars:[
                    {
                        IsAvailable:true,
                        Model:"Model 1",
                        Producer:"Producer 1",
                        YearOfProduction:2000,
                        Description:"Description 1",
                        ImageUrl:""
                    }

                ]
            },
            {
                ImageUrl:"",
                Adress:"Adress 2",
                Longitude:76.123,
                Latitude:56.234,
                Cars:[
                    {
                        IsAvailable:true,
                        Model:"Model 2",
                        Producer:"Producer 2",
                        YearOfProduction:2000,
                        Description:"Description 2",
                        ImageUrl:""
                    }

                ]
            }
        ]
    }



];