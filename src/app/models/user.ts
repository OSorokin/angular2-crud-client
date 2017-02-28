import {Gender} from "./gender.enum";
import {UserDate} from "./user-date";
export class User {

   id: number;
   name: string;
   surname: string;
   birth_date: string;
   gender: Gender;
   email: string;
   position: string;
   project: string;

/*
  constructor(values: Object ={})
  {
    Object.assign(this, values);
  }
*/

}
