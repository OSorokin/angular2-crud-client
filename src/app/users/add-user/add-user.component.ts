import { Component } from '@angular/core';
import { isSuccess } from '@angular/http/src/http_utils';
import { IMyDateModel } from 'mydatepicker';

import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user.model';
import { datePickerOptions } from '../../shared/date-picker-options';
import { TranslateService } from 'ng2-translate';

@Component({
  moduleId: module.id,
  selector: 'app-add-user',
  templateUrl: 'add-user.component.html'
})

export class AddUserComponent {

  myDatePickerOptions = datePickerOptions;

  projects: string[] = ['Project1', 'Project2', 'Project3'];
  positions: string[] = ['Post1', 'Post2', 'Post3'];
  genders: string [] = ['Мужской', 'Женский'];
  user: User = new User();
  userBirthDate: string;

  isSuccessAddUser = false;
  isErrorAddUser = false;

  constructor(
    public userService: UsersService,
    private translate: TranslateService
  ) {}

  addUser(): void {
    const user = this.user;
    user.birth_date = this.userBirthDate;

    this.userService.create(user).subscribe(res => {
      this.isSuccessAddUser = !isSuccess(res.id);
      this.isErrorAddUser = isSuccess(res.id);
    });
  }

  onDateChanged(event: IMyDateModel): void {
    this.userBirthDate = event.date.day + '/' + event.date.month + '/' + event.date.year;
  }

}
