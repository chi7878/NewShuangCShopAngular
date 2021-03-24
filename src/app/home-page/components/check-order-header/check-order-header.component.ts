import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-check-order-header',
  templateUrl: './check-order-header.component.html',
  styleUrls: ['./check-order-header.component.scss']
})
export class CheckOrderHeaderComponent implements OnInit {
  @Input() activeTab:number;
  constructor() { }

  ngOnInit(): void {
  }

}
