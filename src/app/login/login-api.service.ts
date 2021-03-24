import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';


@Injectable({
  providedIn: 'root'
})
export class LoginApiService {
  link = 'https://vue-course-api.hexschool.io';
  cookies = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
  constructor(private api: ApiService) { }

  postLogin(username, password) {
    const data = {username, password};
    return this.api.post(`${this.link}/admin/signin`, data)
    
  }
}
