import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DashboardApiService } from '../../dashboard-api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-info-popup',
  templateUrl: './project-info-popup.component.html',
  styleUrls: ['./project-info-popup.component.scss']
})
export class ProjectInfoPopupComponent implements OnInit {
  formData = new FormGroup({
    name: new FormControl('', [Validators.maxLength(200)]),
    num: new FormControl('', [Validators.maxLength(3)]),
    isOpened : new FormControl(true),
    originalPrice: new FormControl(''),
    sellingPrice: new FormControl(''),
    class: new FormControl('', [Validators.maxLength(50)]),
    unit: new FormControl('', [Validators.maxLength(50)]),
    content: new FormControl('', [Validators.maxLength(300)]),
    imgUrl: new FormControl('', Validators.required),
    fileName: new FormControl(''),
  });
  isUploaded = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dashboardApi: DashboardApiService,
  private dialogRef: MatDialogRef<ProjectInfoPopupComponent>) { }

  ngOnInit(): void {
    if (this.data && this.data.isEdit) {
      this.formData.controls.name.setValue(this.data['product']['title']);
      this.formData.controls.num.setValue(this.data['product']['num']);
      this.formData.controls.isOpened.setValue(this.data['product']['is_enabled'] === 1);
      this.formData.controls.originalPrice.setValue(this.data['product']['origin_price']);
      this.formData.controls.sellingPrice.setValue(this.data['product']['price']);
      this.formData.controls.class.setValue(this.data['product']['category']);
      this.formData.controls.unit.setValue(this.data['product']['unit']);
      this.formData.controls.content.setValue(this.data['product']['description']);
      this.formData.controls.imgUrl.setValue(this.data['product']['imageUrl']);
    }
  }

  showConfirm() {
    return this.formData.status !== 'VALID';
  }

  changeImg(event) {
    if (event.target.files[0]) {
      this.isUploaded = true;
      this.dashboardApi.postUploadImg(event.target.files[0]).subscribe(data => {
        if (data['success']) {
          this.formData.controls.imgUrl.setValue(data['imageUrl']);
          this.formData.controls.fileName.setValue(event.target.files[0].name);
        }

        this.isUploaded = false;
      });
    }
  }

  addProduct() {
    if (this.formData.status === 'VALID') {
      const data = {
        title: this.formData.controls.name.value,
        category: this.formData.controls.class.value,
        origin_price: this.formData.controls.originalPrice.value,
        price: this.formData.controls.sellingPrice.value,
        unit: this.formData.controls.unit.value,
        description: this.formData.controls.content.value,
        is_enabled: this.formData.controls.isOpened.value ? 1 : 0,
        imageUrl: this.formData.controls.imgUrl.value,
        num: this.formData.controls.num.value
      }

      if (this.data && this.data.isEdit) {
        this.dashboardApi.putEditProduct(data, this.data['product']['id']).subscribe(data => {
          if (data['success']) {
            this.dialogRef.close('edit');
          }
        });
      } else {
        this.dashboardApi.postAddProduct(data).subscribe(data => {
          if (data['success']) {
            this.dialogRef.close('add');
          }
        });
      }

      
    }
  }
}