import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DashboardApiService } from '../../dashboard-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CouponInfoPopupComponent } from '../coupon-info-popup/coupon-info-popup.component';
import { AlertPopupComponent } from '../alert-popup/alert-popup.component';



@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.scss']
})
export class CouponListComponent implements OnInit {
  page: number = 1;
  couponList: object[] = [];
  isLoaded:boolean = false;
  constructor(public dialog: MatDialog, private snackBar :MatSnackBar, private dashboardApi: DashboardApiService) { }

  ngOnInit(): void {
    this.isLoaded = true;
    this.getCouponList();
  }

  openNewCoupon() {
    const confirmDialogRef = this.dialog.open(CouponInfoPopupComponent, {
      height: '350px',
      width: '800px',
      panelClass: 'couponPopup',
    });

    confirmDialogRef.beforeClosed().subscribe((data) => {
      if (data === 'add') {
        this.getCouponList();
        this.snackBar.open('新增優惠券完成!!', 'OK', {
          duration: 5000,
          horizontalPosition : 'right',
          panelClass: 'snack-bar__test'
        });
      }
    });
  }

  getCouponList() {
    this.dashboardApi.getCoupon(this.page).subscribe(data => {
      this.couponList = data['coupons'];
      this.isLoaded = false;
    })
  }

  toggleOpened(status, id) {
    this.dashboardApi.putEditCoupon({is_enabled: status ? 0 : 1}, id).subscribe(data => {
      if (data['success']) {
        this.snackBar.open(status ? '優惠券已關閉' : '優惠券已啟用', 'OK', {
          duration: 5000,
          horizontalPosition : 'right',
          panelClass: 'snack-bar__test' 
        });
      }
    });
  }

  deleteCoupon(id) {
    const deleteDialogRef = this.dialog.open(AlertPopupComponent, {
      height: '150px',
      width: '300px',
      data: {
        title: '確定要刪除優惠券嗎?',
        btnName: '刪除'
      }
    });

    deleteDialogRef.beforeClosed().subscribe((data) => {
      if (data === 'confirm') {
        this.dashboardApi.deleteCoupon(id).subscribe(data => {
          if (data['success']) {
            this.getCouponList();
            this.snackBar.open('優惠券已刪除!!', 'OK', {
              duration: 5000,
              horizontalPosition : 'right',
              panelClass: 'snack-bar__test' 
            });
          }
        });
      }
    });
  }

  editProduct(coupon) {
    const confirmDialogRef = this.dialog.open(CouponInfoPopupComponent, {
      height: '350px',
      width: '800px',
      data: {
        isEdit: true,
        coupon: coupon
      }
    });

    confirmDialogRef.beforeClosed().subscribe((data) => {
      if (data === 'edit') {
        this.getCouponList();
        this.snackBar.open('優惠券編輯完成!!', 'OK', {
          duration: 5000,
          horizontalPosition : 'right',
          panelClass: 'snack-bar__test'
        });
      }
    })
  }
}
