import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {IUser} from '../models/i-user';

@Injectable({
  providedIn: 'root'
})
export class User {
  private apiUrl = 'https://peticiones.online/api/users';

  private httpClient = inject(HttpClient);

  getAllUsers(): Observable<IUser[]> {
    return this.httpClient.get<any>(this.apiUrl).pipe(
      map(resp => resp.results)
    );
  }

  getUserById(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.apiUrl}/${id}`);
  }

  createNewUser(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(this.apiUrl, user);
  }

  updateUser(id: string, user: IUser): Observable<IUser> {
    return this.httpClient.put<IUser>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: string): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

}
