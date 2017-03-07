import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { UsersService } from '../../shared/services/users.service';


@Component({
  moduleId: module.id,
  selector: 'app-users-list',
  templateUrl: 'users-list.component.html'
})

export class UsersListComponent implements OnInit {

  users: Array<User>;

  constructor(public userService: UsersService, private router: Router) {

  }

  ngOnInit() {
    this.getUsers();
  }

  editUser(user): void {
    this.router.navigate(['users/edit', user.id]);
  }

  deleteUser(user): void {
    this.userService.delete(user.id).subscribe( () => {
      this.getUsers();
    });
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }


}
