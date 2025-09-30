import {Component, inject, OnInit} from '@angular/core';
import {IUser} from '../../models/i-user';
import {User as UserService} from '../../services/user';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  users: IUser[] = [];

  userService = inject(UserService);

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(users => {
      console.log('users', users);
      this.users = users;
    })
  }
}
