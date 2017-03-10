import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MyDatePickerModule } from 'mydatepicker';

import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UsersListComponent } from './users-list/users-list.component';

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
    AddUserComponent,
    EditUserComponent,
    UsersListComponent
  ],
  providers: [ UsersService ]

})

export class UsersModule {}

