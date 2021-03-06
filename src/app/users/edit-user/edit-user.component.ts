import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { isSuccess } from '@angular/http/src/http_utils';
import { IMyDateModel, IMyOptions } from 'mydatepicker';

import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user.model';
import { datePickerOptions } from '../../shared/date-picker-options';
import { TranslateService } from 'ng2-translate';

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
  genders: string [] = ['Мужской', 'Женский'];

  myDatePickerOptions = datePickerOptions;
  userBirthDate: string;
  dateModel: Object;

  isSuccessUpdateUser = false;
  isErrorUpdateUser = false;

  constructor(

    private route: ActivatedRoute,
    public userService: UsersService,
    private translate: TranslateService) {

  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.userService.getUser(+params['id']))
      .subscribe(user => {
        this.user = user;
        this.userBirthDate = this.user.birth_date;
        this.dateModel = this.parseDateToJson(this.user.birth_date);
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
