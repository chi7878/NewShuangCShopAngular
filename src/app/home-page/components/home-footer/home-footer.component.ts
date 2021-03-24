import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.scss']
})
export class HomeFooterComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  activeLink(status, isProduct?) {
    if (isProduct) {
      this.router.navigate([`/products`], {queryParams:{status}});
    } else {
      this.router.navigate([`/${status}`]);
    }
    window.scroll(0,0);
  }

}
