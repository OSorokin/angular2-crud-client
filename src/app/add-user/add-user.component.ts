import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {UsersService} from "../services/users.service";
import {Gender} from "../models/gender.enum";
import {IMyOptions, IMyDateModel} from 'mydatepicker';
import {datePickerOptions} from '../options/date-picker-options';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['add-user.component.sass'],
  providers: [UsersService]
})
export class AddUserComponent implements OnInit {

  myDatePickerOptions = datePickerOptions;

  projects: string[] = ["Project1", "Project2", "Project3"];
  positions: string[] = ["Post1", "Post2", "Post3"];
  user: User = new User();
  keys: Gender[] = [Gender.MAN,Gender.WOMAN];
  new_user_birth_date:string;

  constructor(private userService: UsersService) {

  }

  ngOnInit() {
  }

  addUser(){
    var new_user = this.user;
    new_user.birth_date =  this.new_user_birth_date;
    this.userService.create(new_user);
  }

  onDateChanged(event: IMyDateModel) {
   this.new_user_birth_date = event.date.day +'/'+ event.date.month +'/'+ event.date.year;
   console.log(this.new_user_birth_date);
  }

}
