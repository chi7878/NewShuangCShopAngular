import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginApiService } from './../../login-api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NoticePopupComponent } from '../../../home-page/components/notice-popup/notice-popup.component';

@Component({
  selector: 'app-inner-login',
  templateUrl: './inner-login.component.html',
  styleUrls: ['./inner-login.component.scss']
})
export class InnerLoginComponent implements OnInit {
  loginData = new FormGroup({
    user: new FormControl(''),
    password: new FormControl('')
  });
  isLoaded:boolean = false;
  constructor(private router: Router, private loginApi: LoginApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    if (document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1') !== '') {
      this.router.navigate(['/dashboard']);
    }
  }
  
  backLogin() {
    this.router.navigate(['/login']);
  }
  
  login() {
    this.isLoaded = true;

    this.loginApi.postLogin(this.loginData.controls.user.value, this.loginData.controls.password.value).subscribe(data => {
      if (data['success']) {
        document.cookie = `hexToken=${data['token']}; expires= ${new Date(data['expired'])}`
        this.router.navigate(['/dashboard']);
      } else {
        this.dialog.open(NoticePopupComponent, {
          height: '150px',
          width: '300px',
          data: {
            title: '輸入的帳號或密碼錯誤'
          }
        })
      }
      this.isLoaded = false;
    });
  }

  showLogin() {
    return this.loginData.status !== 'VALID';
  }

}

