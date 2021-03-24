import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DashboardApiService } from '../../dashboard-api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-coupon-info-popup',
  templateUrl: './coupon-info-popup.component.html',
  styleUrls: ['./coupon-info-popup.component.scss']
})
export class CouponInfoPopupComponent implements OnInit {
  formData = new FormGroup({
    name: new FormControl('', [Validators.maxLength(200), Validators.required]),
    code: new FormControl('', [Validators.maxLength(20), Validators.required]),
    isOpened : new FormControl(true),
    percent: new FormControl('', Validators.required),
  })
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dashboardApi: DashboardApiService,
  private dialogRef: MatDialogRef<CouponInfoPopupComponent>) { }

  ngOnInit(): void {
    if (this.data && this.data.isEdit) {
      this.formData.controls.name.setValue(this.data['coupon']['title']);
      this.formData.controls.code.setValue(this.data['coupon']['code']);
      this.formData.controls.isOpened.setValue(this.data['coupon']['is_enabled'] === 1);
      this.formData.controls.percent.setValue(this.data['coupon']['percent']);
    }
  }

  showConfirm() {
    return this.formData.status !== 'VALID';
  }

  addProduct() {
    if (this.formData.status === 'VALID') {
      const data = {
        title: this.formData.controls.name.value,
        code: this.formData.controls.code.value,
        is_enabled: this.formData.controls.isOpened.value ? 1 : 0,
        percent: this.formData.controls.percent.value
      }

      if (this.data && this.data.isEdit) {
        this.dashboardApi.putEditCoupon(data, this.data['coupon']['id']).subscribe(data => {
          if (data['success']) {
            this.dialogRef.close('edit');
          }
        });
      } else {
        this.dashboardApi.postAddCoupon(data).subscribe(data => {
          if (data['success']) {
            this.dialogRef.close('add');
          }
        });
      }
    }
  }
}
