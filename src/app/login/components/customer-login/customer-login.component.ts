import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.scss']
})
export class CustomerLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backHome() {
    this.router.navigate(['/home']);
  }

  goInnerLogin() {
    this.router.navigate(['/innerLogin']);
  }
}
