import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
user: any;
id:any;
person = new Person();

  constructor(private route: ActivatedRoute,
    private userService: UsersService,
    private location: Location) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params.id;
     this.getUser();
     
  }

 getUser(): void {
  
   this.userService.getById(this.id).subscribe(data =>{
    this.person = data;
   console.log(this.person)
   })

 }

 goBack(): void {
   this.location.back()
 }

 updateUser(): void {
   this.userService.update(this.user, this.user.id).subscribe(() => this.goBack())
 }
}
