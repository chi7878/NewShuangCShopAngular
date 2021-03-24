import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-order',
  templateUrl: './check-order.component.html',
  styleUrls: ['./check-order.component.scss']
})
export class CheckOrderComponent implements OnInit {
  activeTab: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  nextStep() {
    this.activeTab += 1;
  }

  prevStep() {
    this.activeTab -= 1;
  }

}
