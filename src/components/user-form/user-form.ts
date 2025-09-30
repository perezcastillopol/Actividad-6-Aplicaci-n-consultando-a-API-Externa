import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {User as UserService} from '../../services/user';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {IUser} from '../../models/i-user';

@Component({
  selector: 'app-user-form',
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'
})
export class UserForm implements OnInit{
  userForm!: FormGroup;
  isEditMode = false;
  userId!: string;

  private formBuilder = inject(FormBuilder);
  private userService = inject(UserService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      image: ['', [Validators.required]],
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.userId = String(id);
      this.loadUser(this.userId);
    }
  }

  loadUser(id: string): void {
    this.userService.getUserById(id).subscribe(user => {
      this.userForm.patchValue(user);
    })
  }

  onSubmit() {
    if (this.userForm.invalid) return;

    const user: IUser = this.userForm.value;

    if (this.isEditMode) {
      this.userService.updateUser(this.userId, user).subscribe(() => {
        alert('Usuario actualizado correctamente');
        this.router.navigate(['/user', this.userId]);
      })
    } else {
      this.userService.createNewUser(user).subscribe(newUser => {
        alert('Usuario creado correctamente');
        this.router.navigate(['/user', newUser._id]);
      })
    }
  }
}
