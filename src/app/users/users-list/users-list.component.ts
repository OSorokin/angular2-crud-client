import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../shared/users/user.model';
import { UsersService } from '../../shared/users/users.service';

@Component({
  moduleId: module.id,
  selector: 'app-users-list',
  templateUrl: 'users-list.component.html',
})

export class UsersListComponent implements OnInit {

  users: User[];

  constructor(public userService: UsersService, private router: Router, private route: ActivatedRoute ) {

  }

  ngOnInit() {
    this.userService.getUsers().then(users => this.users = users);
  }

  editUser(user): void {
    this.router.navigate(['users/edit', user.id]);
  }

  deleteUser(user): void {
    this.userService.delete(user.id).then(() => {
      this.userService.getUsers().then(users => this.users = users);
    });
  }


}
