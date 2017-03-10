import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersListComponent } from './users-list/users-list.component';

import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';

const routes: Routes = [
  {path: 'users', component: UsersListComponent},
  {path: 'users/add', component: AddEditUserComponent},
  {path: 'users/edit/:id', component: AddEditUserComponent}
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
