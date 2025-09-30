import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class User {
  httpClient = inject(HttpClient);

  private apiUrl = 'https://peticiones.online/users';

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<any>(this.apiUrl).pipe(
      map(resp => resp.data)
    );
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.apiUrl}/${id}`);
  }

  createNewUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

}
