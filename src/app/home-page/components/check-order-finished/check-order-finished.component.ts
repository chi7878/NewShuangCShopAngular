import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-order-finished',
  templateUrl: './check-order-finished.component.html',
  styleUrls: ['./check-order-finished.component.scss']
})
export class CheckOrderFinishedComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goPage(page) {
    this.router.navigate([`/${page}`]);
  }

}
