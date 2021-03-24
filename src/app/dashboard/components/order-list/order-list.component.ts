import { Component, OnInit } from '@angular/core';
import { DashboardApiService } from './../../dashboard-api.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orderList:object[] = [];
  isLoaded: boolean = false;
  constructor(private dashboardApi: DashboardApiService) { }
  
  ngOnInit(): void {
    this.isLoaded = true;
    this.getOrderList();
  }

  getOrderList() {
    this.dashboardApi.getInnerOrder().subscribe(data => {
      this.orderList = data['orders'];
      this.isLoaded = false;

    })
  }

  totalPrice(price) {
    return Math.round(price);
  }

  totalQty(list) {
    return Object.values(list).map(product => product['qty']).reduce((a, b) => a + b);
  }

}
