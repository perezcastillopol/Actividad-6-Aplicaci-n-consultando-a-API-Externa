import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IUser} from '../../models/i-user';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-user-card',
  imports: [
    RouterLink
  ],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css'
})
export class UserCard {
  @Input() user!: IUser;
  @Output() delete = new EventEmitter<string>();

  onDelete() {
    this.delete.emit(this.user._id);
  }
}
