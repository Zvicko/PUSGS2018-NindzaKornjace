import { Component, OnInit } from '@angular/core';
import { Reservation, DataService } from '../data.service';

@Component({
  selector: 'app-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.css']
})
export class UserReservationsComponent implements OnInit {

  userReservations:Reservation[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.userReservations=this.dataService.getLogedInUsersReservations();
  }

}
