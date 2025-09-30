import { Routes } from '@angular/router';
import {Home} from '../components/home/home';
import {UserDetail} from '../components/user-detail/user-detail';
import {NewUser} from '../components/new-user/new-user';
import {UpdateUser} from '../components/update-user/update-user';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'user/:id', component: UserDetail},
  {path: 'newuser', component: NewUser},
  {path: 'updateuser/:id', component: UpdateUser}
];
