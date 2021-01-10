import { API_URL } from './../constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  url = `${API_URL}/login`;

  getUserId(login, pass): Observable<any> {
    return this.http.get(this.url, { params: { login, pass } });
  }
}
