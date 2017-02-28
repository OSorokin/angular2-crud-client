import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';

import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';

// определение маршрутов
const routes: Routes =[
  { path: '', component: UsersComponent},
  { path: 'add_user', component: AddUserComponent},
  { path: 'edit_user/:id', component: EditUserComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EditUserComponent,
    AddUserComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
