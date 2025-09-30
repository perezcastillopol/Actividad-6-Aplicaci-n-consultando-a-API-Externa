import { Component } from '@angular/core';
import {UserForm} from '../user-form/user-form';

@Component({
  selector: 'app-new-user',
  imports: [
    UserForm
  ],
  templateUrl: './new-user.html',
  styleUrl: './new-user.css'
})
export class NewUser {

}
