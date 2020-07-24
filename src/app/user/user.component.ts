import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import { Person } from '../person';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any;
  selectedUser: Person;

  constructor(private usersService: UsersService) { }



  ngOnInit() {
    this.users =[];
    this.usersService.getPerson().subscribe(res => {
      this.users = res["data"];
    })
}

onSelect(user: Person): void{
  this.selectedUser = user;
}
}
