import { Component, OnInit } from '@angular/core';
import { isSuccess } from '@angular/http/src/http_utils';

import { UsersService } from '../../shared/users/users.service';
import { User } from '../../shared/users/user.model';
import { Gender } from '../../shared/users/gender.enum';

import { IMyDateModel } from 'mydatepicker';
import { datePickerOptions } from '../../shared/date-picker-options';

@Component({
  moduleId: module.id,
  selector: 'app-add-user',
  templateUrl: 'add-user.component.html'
})

export class AddUserComponent {

  myDatePickerOptions = datePickerOptions;

  projects: string[] = ['Project1', 'Project2', 'Project3'];
  positions: string[] = ['Post1', 'Post2', 'Post3'];
  user: User = new User();
  keys: Gender[] = [Gender.MAN, Gender.WOMAN];
  userBirthDate: string;

  isSuccessAddUser = false;
  isErrorAddUser = false;

  constructor(public userService: UsersService) {}

  addUser(): void {
    const user = this.user;
    user.birth_date = this.userBirthDate;
    this.userService.create(user).then(res => {
      this.isSuccessAddUser = !isSuccess(res.id);
      this.isErrorAddUser = isSuccess(res.id);
    });
  }

  onDateChanged(event: IMyDateModel): void {
    this.userBirthDate = event.date.day + '/' + event.date.month + '/' + event.date.year;
  }

}
