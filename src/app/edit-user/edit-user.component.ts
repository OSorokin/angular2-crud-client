import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { isSuccess } from '@angular/http/src/http_utils';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { UsersService } from '../services/users.service';
import { User } from '../models/user';
import { Gender } from '../models/gender.enum';

import { datePickerOptions } from '../options/date-picker-options';
import { IMyDateModel } from 'mydatepicker';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['edit-user.component.sass'],
  providers: [UsersService]
})

export class EditUserComponent implements OnInit {

  id: number;
  user: User;
  projects: string[] = ['Project1', 'Project2', 'Project3'];
  positions: string[] = ['Post1', 'Post2', 'Post3'];
  keys: Gender[] = [Gender.MAN, Gender.WOMAN];
  userBirthDate: string;

  myDatePickerOptions = datePickerOptions;
  isSuccessUpdateUser;

  constructor(private route: ActivatedRoute,
              private userService: UsersService) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.userService.getUser(+params['id']))
      .subscribe(user => this.user = user);
  }

  updateUser() {
    const user = this.user;
    user.birthDate = this.userBirthDate;
    this.userService.update(this.id, user).then(res => {
      this.isSuccessUpdateUser = isSuccess(res.id);
    });
  }

  onDateChanged(event: IMyDateModel) {
    this.userBirthDate = event.date.day + '/' + event.date.month + '/' + event.date.year;
  }

}
