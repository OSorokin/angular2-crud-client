import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {UsersService} from "../services/users.service";
import {Gender} from "../models/gender.enum";
import {IMyOptions, IMyDateModel} from 'mydatepicker';
import {datePickerOptions} from '../options/date-picker-options';
import {isSuccess} from "@angular/http/src/http_utils";

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
  _user_birth_date:string;

  isSuccessAddUser;

  constructor(private userService: UsersService) {

  }

  ngOnInit() {
  }

  addUser(){
    var _user = this.user;
    _user.birth_date = this._user_birth_date;
    this.userService.create(_user).then(res => {
        this.isSuccessAddUser = isSuccess(res.id);
    })
  }

  onDateChanged(event: IMyDateModel) {
   this._user_birth_date = event.date.day +'/'+ event.date.month +'/'+ event.date.year;
  }

}
