import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['users.component.sass'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  errorMessage: string;
  users: User[];

  constructor(public userService: UsersService, private router: Router) {
  }

  ngOnInit() {
    this.userService.getUsers().then(users => this.users = users);
  }

  deleteUser(user) {
    this.userService.delete(user.id).then(() => {
      this.userService.getUsers().then(users => this.users = users);
    });
  }


}
