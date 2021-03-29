import { Component, OnInit } from '@angular/core';
import { DashboardApiService } from '../../dashboard-api.service';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  activeTab:number = 1;
  headerInfo:object = {
    productQty: 0,
    totalOrder: 0,
    totalPrice: 0
  };
  productList: object[] = [];
  isLoaded:boolean = false;
  constructor(private dashboardApi: DashboardApiService) { }

  ngOnInit(): void {
    this.isLoaded = true;
    this.getData();
  }

  changeTabNum(num) {
    this.activeTab = num;
  }

  getData() {
    forkJoin(this.dashboardApi.getInnerProduct(), this.dashboardApi.getInnerOrder()).subscribe(([product, order]) => {
      if (product['success']) {
        this.productList = JSON.parse(JSON.stringify(Object.values(product['products'])));
        this.headerInfo['productQty'] = this.productList.length;
      }
      if (order['success']) {
        this.headerInfo['totalOrder'] = order['orders'].length;
        this.headerInfo['totalPrice'] = Math.round(order['orders'].map(item => item.total).reduce((a, b) => a + b));
      }
      const info = JSON.parse(JSON.stringify(this.headerInfo));
      this.headerInfo = JSON.parse(JSON.stringify(info));
      this.isLoaded = false;
    })
  }

  updateList() {
    this.getData();
  }
}
