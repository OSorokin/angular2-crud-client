import {Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {User} from "../models/user";
import {UsersService} from "../services/users.service";
import {Gender} from "../models/gender.enum";
import {datePickerOptions} from '../options/date-picker-options';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['edit-user.component.sass'],
  providers: [UsersService]
})
export class EditUserComponent implements OnInit {

   id:number;
   errorMessage: string;
   user: User;
   projects: string[] = ["Project1", "Project2", "Project3"];
   positions: string[] = ["Post1", "Post2", "Post3"];
   keys: Gender[] = [Gender.MAN,Gender.WOMAN];

   myDatePickerOptions = datePickerOptions;

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
    this.userService.update(this.id,this.user);
  }


}
