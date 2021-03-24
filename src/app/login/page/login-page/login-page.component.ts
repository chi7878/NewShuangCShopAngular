import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  activeRoute: string = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute = this.route.snapshot.routeConfig.path;
  }

}
