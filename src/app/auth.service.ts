import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }
  login(log) {
    return this.http.post(`${this.URL}login`, log);
  }
  register(reg) {
    return this.http.post(`${this.URL}register`, reg);
  }
  listing() {
    return this.http.get(`${this.URL}listing`);
  }
  update(upd, id) {
    return this.http.put(`${this.URL}update/${id}`, upd);
  }
  delete(id: any) {
    return this.http.delete(`${this.URL}delete/${id}`);

  }
  listingbyid(id: any) {
    return this.http.get(`${this.URL}listingbyid/${id}`);
  }

}
