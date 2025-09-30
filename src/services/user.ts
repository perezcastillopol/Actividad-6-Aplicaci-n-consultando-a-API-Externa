import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {IUser} from '../models/i-user';

@Injectable({
  providedIn: 'root'
})
export class User {
  httpClient = inject(HttpClient);

  private apiUrl = 'https://peticiones.online/api/users';

  getAllUsers(): Observable<IUser[]> {
    return this.httpClient.get<any>(this.apiUrl).pipe(
      map(resp => resp.results)
    );
  }

  getUserById(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.apiUrl}/${id}`);
  }

  createNewUser(user: User): Observable<IUser> {
    return this.httpClient.post<IUser>(this.apiUrl, user);
  }

  updateUser(id: number, user: User): Observable<IUser> {
    return this.httpClient.put<IUser>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

}
