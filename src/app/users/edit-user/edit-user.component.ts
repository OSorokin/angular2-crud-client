import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { isSuccess } from '@angular/http/src/http_utils';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { UsersService } from '../../shared/users/users.service';
import { User } from '../../shared/users/user.model';
import { Gender } from '../../shared/users/gender.enum';

import { datePickerOptions } from '../../shared/date-picker-options';
import { IMyDateModel } from 'mydatepicker';

@Component({
  moduleId: module.id,
  selector: 'app-edit-user',
  templateUrl: 'edit-user.component.html'
})

export class EditUserComponent implements OnInit {

  id: number;
  user: User;
  projects: string[] = ['Project1', 'Project2', 'Project3'];
  positions: string[] = ['Post1', 'Post2', 'Post3'];
  keys: Gender[] = [Gender.MAN, Gender.WOMAN];
  userBirthDate: string;

  myDatePickerOptions = datePickerOptions;

  isSuccessUpdateUser = false;
  isErrorUpdateser = false;

  constructor(private route: ActivatedRoute,
              public userService: UsersService) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.userService.getUser(+params['id']))
      .subscribe(user => {
        this.user = user;
      });
  }

  updateUser(): void {
    const user = this.user;
    user.birth_date = this.userBirthDate;
    this.userService.update(this.id, user).then(res => {
      this.isSuccessUpdateUser = !isSuccess(res.id);
      this.isErrorUpdateser = isSuccess(res.id);
    });
  }

  onDateChanged(event: IMyDateModel): void {
    this.userBirthDate = event.date.day + '/' + event.date.month + '/' + event.date.year;
  }

}
