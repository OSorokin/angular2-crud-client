import {Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {User} from "../models/user";
import {UsersService} from "../services/users.service";
import {Gender} from "../models/gender.enum";
import {datePickerOptions} from '../options/date-picker-options';
import {isSuccess} from "@angular/http/src/http_utils";
import {IMyDateModel} from "mydatepicker";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['edit-user.component.sass'],
  providers: [UsersService]
})
export class EditUserComponent implements OnInit {

   id:number;
   user: User;
   projects: string[] = ["Project1", "Project2", "Project3"];
   positions: string[] = ["Post1", "Post2", "Post3"];
   keys: Gender[] = [Gender.MAN,Gender.WOMAN];
  _user_birth_date:string;

   myDatePickerOptions = datePickerOptions;
   isSuccessUpdateUser;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService
  ){ }

  ngOnInit(): void{
    this.route.params
      .switchMap((params: Params) => this.userService.getUser(+params['id']))
      .subscribe(user => this.user = user);
  }

  updateUser(){
    var _user = this.user;
    _user.birth_date = this._user_birth_date;
    this.userService.update(this.id,_user).then(res => {
      this.isSuccessUpdateUser = isSuccess(res.id);
    });
  }

  onDateChanged(event: IMyDateModel) {
    this._user_birth_date = event.date.day +'/'+ event.date.month +'/'+ event.date.year;
  }


}
