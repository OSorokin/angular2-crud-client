import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { UsersService } from '../../shared/services/users.service';
import { TranslateService } from 'ng2-translate';

import { isSuccess } from '@angular/http/src/http_utils';
import { isUndefined } from 'util';

import { User } from '../../shared/models/user.model';

import { IMyDateModel } from 'mydatepicker';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: 'add-edit-user.component.html'
})

export class AddEditUserComponent implements OnInit {

  id: number;
  user: User = new User();

  projects: string[] = ['Project1', 'Project2', 'Project3'];
  positions: string[] = ['Post1', 'Post2', 'Post3'];
  genders: string [] = ['Мужской', 'Женский'];

  userBirthDate: string;
  dateModel: Object;

  isSuccessAddUser = false;
  isErrorAddUser = false;

  isSuccessUpdateUser = false;
  isErrorUpdateUser = false;

  curAddTemplate = false;
  curEditTemplate = false;

  constructor(
    private route: ActivatedRoute,
    public userService: UsersService,
    private translate: TranslateService) {
  }

  ngOnInit() {
    this.checkIdInParams();
    this.getUserByIdIfExist();
  }

  checkIdInParams() {
    return this.route.params.subscribe(( params: Params ) => {

      const userId = params['id'];

      if ( isUndefined(userId) ) {
        this.curAddTemplate = true;
      } else {
        this.curEditTemplate = true;
      }

    });
  }

  getUserByIdIfExist() {
    if (this.curEditTemplate) {
      this.route.params
        .switchMap((params: Params) => this.userService.getUser(+params['id']))
        .subscribe(
          user => {
            this.user = user;
            this.userBirthDate = this.user.birth_date;
            this.dateModel = this.parseDateToJson(this.user.birth_date);
        });
    }
  }

  addUser(): void {
    const newUser = new User({
      name: this.user.name,
      surname: this.user.surname,
      birth_date: this.userBirthDate,
      gender: this.user.gender,
      email: this.user.email,
      position: this.user.position,
      project: this.user.project
    });

    this.userService.create(newUser).subscribe(res => {
      this.isSuccessAddUser = !isSuccess(res.id);
      this.isSuccessAddUser = !isSuccess(res.id);
      this.isErrorAddUser = isSuccess(res.id);
    });
  }

  updateUser(): void {

    const user = this.user;
    user.birth_date = this.userBirthDate;

    this.userService.update(this.id, user).subscribe(
      (res) => {
        this.isSuccessUpdateUser = !isSuccess(res.id);
        this.isErrorUpdateUser  = isSuccess(res.id);
      }
    );

  }

  onDateChanged(event: IMyDateModel): void {
    this.userBirthDate = event.date.day + '/' + event.date.month + '/' + event.date.year;
  }

  parseDateToJson ( date: string ): Object {
    const arr = date.split('/');
    return { date: { year: arr[2], month: arr[1], day: arr[0] } };
  }

}
