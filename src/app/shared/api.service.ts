import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http: HttpClient) { }

  get(url, params?) {
    if (params) {
      return this.http.get(url, {params});
    } else {
      return this.http.get(url);
    }
  }

  getInCookies(url, cookies, params?) {
    return this.http.get(url, {headers: {Authorization : cookies}, params});
  }
  
  post(url, params) {
    return this.http.post(url, params);
  }

  postInCookies(url, params, cookies) {
    const header = {headers: {Authorization : cookies}};
    return this.http.post(url, params, header);
  }
    
  put(url, params) {
    return this.http.post(url, params);
  }

  putInCookies(url, params, cookies) {
    const header = {headers: {Authorization : cookies}};
    return this.http.put(url, params, header);
  }

  delete(url) {
    return this.http.delete(url);
  }

  deleteInCookies(url, cookies) {
    const header = {headers: {Authorization : cookies}};
    return this.http.delete(url, header);
  }


}
