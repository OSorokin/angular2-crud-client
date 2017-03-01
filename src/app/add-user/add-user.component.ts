import { Component, OnInit } from '@angular/core';
import { isSuccess } from '@angular/http/src/http_utils';

import { UsersService } from '../services/users.service';
import { User } from '../models/user';
import { Gender } from '../models/gender.enum';

import { IMyDateModel } from 'mydatepicker';
import { datePickerOptions } from '../options/date-picker-options';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['add-user.component.sass'],
  providers: [UsersService]
})

export class AddUserComponent implements OnInit {

  myDatePickerOptions = datePickerOptions;

  projects: string[] = ['Project1', 'Project2', 'Project3'];
  positions: string[] = ['Post1', 'Post2', 'Post3'];
  user: User = new User();
  keys: Gender[] = [Gender.MAN, Gender.WOMAN];
  userBirthDate: string;

  isSuccessAddUser = false;
  isSErrorAddUser = false;

  constructor(private userService: UsersService) {}

  ngOnInit() {
  }

  addUser() {
    const user = this.user;
    user.birthDate = this.userBirthDate;
    this.userService.create(user).then(res => {
      this.isSuccessAddUser = isSuccess(res.id);
    });
  }

  onDateChanged(event: IMyDateModel) {
    this.userBirthDate = event.date.day + '/' + event.date.month + '/' + event.date.year;
  }

}
