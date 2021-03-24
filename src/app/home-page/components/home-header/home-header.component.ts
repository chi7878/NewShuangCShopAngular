import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {
  isMenuOpened: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  activeLink(status) {
    this.router.navigate([`/${status}`]);
    window.scroll(0,0);
  }

}