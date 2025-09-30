import {Component, inject, OnInit} from '@angular/core';
import {IUser} from '../../models/i-user';
import {User as UserService} from '../../services/user';
import {RouterLink} from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [
    RouterLink
  ],
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
      this.users = users;
    })
  }

  deleteUser(id: number): void {
    if (confirm('¿Seguro que quieres eliminar este usuario?')) {
      this.userService.deleteUser(id).subscribe(user => {
        this.users = this.users.filter(user => user.id !== id);
        alert('Usuario eliminado correctamente');
      })
    }
  }
}
