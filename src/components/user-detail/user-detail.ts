import {Component, inject, OnInit} from '@angular/core';
import {IUser} from '../../models/i-user';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {User as UserService} from '../../services/user';

@Component({
  selector: 'app-user-detail',
  imports: [
    RouterLink
  ],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css'
})
export class UserDetail implements OnInit {
  user!: IUser;

  route = inject(ActivatedRoute);
  router = inject(Router);
  userService = inject(UserService);

  ngOnInit() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.loadUser(id);
  }

  loadUser(id: string): void {
    this.userService.getUserById(id).subscribe(user => {
      this.user = user;
    })
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }

  deleteUser(): void {
    if (confirm(`¿Seguro que quieres eliminar a ${this.user.first_name}?`)) {
      this.userService.deleteUser(this.user.id).subscribe(user => {
        alert('Usuario eliminado correctamente');
        this.goBack();
      });
    }
  }
}
