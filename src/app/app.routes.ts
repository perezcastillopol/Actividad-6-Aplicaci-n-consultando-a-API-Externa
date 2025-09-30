import { Routes } from '@angular/router';
import {Home} from '../components/home/home';
import {UserDetail} from '../components/user-detail/user-detail';
import {UserForm} from '../components/user-form/user-form';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'user/:id', component: UserDetail},
  {path: 'newuser', component: UserForm},
  {path: 'updateuser/:id', component: UserForm}
];
