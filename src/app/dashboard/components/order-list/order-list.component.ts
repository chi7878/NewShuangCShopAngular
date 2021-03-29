import { Component, OnInit } from '@angular/core';
import { DashboardApiService } from './../../dashboard-api.service';
import { MatDialog } from '@angular/material/dialog';
import { OrderInfoPopupComponent } from './../order-info-popup/order-info-popup.component';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orderList:object[] = [];
  isLoaded: boolean = false;
  constructor(private dashboardApi: DashboardApiService, public dialog: MatDialog) { }
  
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

  openOrderInfo(info) {
    this.dialog.open(OrderInfoPopupComponent, {
      height: '500px',
      width: '800px',
      autoFocus: false,
      data: {
        info
      }
    });
  }

}
