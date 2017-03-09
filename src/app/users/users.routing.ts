import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {path: 'users', component: UsersListComponent},
  {path: 'users/add', component: AddUserComponent},
  {path: 'users/edit/:id', component: EditUserComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class UsersRoutingModule { }
