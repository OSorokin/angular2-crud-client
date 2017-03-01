import { Gender } from './gender.enum';
export class User {

  id: number;
  name: string;
  surname: string;
  birthDate: string;
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
