import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MyDatePickerModule } from 'mydatepicker';

import { UsersListComponent } from './users-list/users-list.component';

import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';

import { UsersRoutingModule } from './users.routing';
import { UsersService } from '../shared/services/users.service';
import { TranslateModule } from 'ng2-translate';
import { AlertModule } from 'ng2-bootstrap';

// определение маршрутов
@NgModule({

  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    MyDatePickerModule,
    TranslateModule,
    AlertModule.forRoot()
  ],
  declarations: [
    UsersListComponent,
    AddEditUserComponent
  ],
  providers: [ UsersService ]

})

export class UsersModule {}

