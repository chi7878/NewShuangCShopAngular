import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectInfoPopupComponent } from '../project-info-popup/project-info-popup.component';
import { DashboardApiService } from '../../dashboard-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertPopupComponent } from '../alert-popup/alert-popup.component';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  @Input() productList: object[];
  @Output() updateList = new EventEmitter();
  constructor(public dialog: MatDialog, private snackBar :MatSnackBar, private dashboardApi: DashboardApiService) { }

  ngOnInit(): void {}

  openNewProduct() {
    const confirmDialogRef = this.dialog.open(ProjectInfoPopupComponent, {
      height: '600px',
      width: '800px',
      panelClass: 'productPopup',
    });

    confirmDialogRef.beforeClosed().subscribe((data) => {
      if (data === 'add') {
        this.updateList.emit();
        this.snackBar.open('新增商品完成!!', 'OK', {
          duration: 5000,
          horizontalPosition : 'right',
          panelClass: 'snack-bar__test'
        });
      }
    });
  }

  editProduct(product) {
    const confirmDialogRef = this.dialog.open(ProjectInfoPopupComponent, {
      height: '600px',
      width: '800px',
      data: {
        isEdit: true,
        product: product
      }
    });

    confirmDialogRef.beforeClosed().subscribe((data) => {
      if (data === 'edit') {
        this.updateList.emit();
        this.snackBar.open('商品編輯完成!!', 'OK', {
          duration: 5000,
          horizontalPosition : 'right',
          panelClass: 'snack-bar__test'
        });
      }
    })
  }

  deleteProduct(id) {
    const deleteDialogRef = this.dialog.open(AlertPopupComponent, {
      height: '150px',
      width: '300px',
      data: {
        title: '確定要刪除商品嗎?',
        btnName: '刪除'
      }
    });

    deleteDialogRef.beforeClosed().subscribe((data) => {
      if (data === 'confirm') {
        this.dashboardApi.deleteProduct(id).subscribe(data => {
          if (data['success']) {
            this.updateList.emit();
            this.snackBar.open('商品已刪除!!', 'OK', {
              duration: 5000,
              horizontalPosition : 'right',
              panelClass: 'snack-bar__test' 
            });
          }
        });
      }
    });
  }

  toggleOpened(status, id) {
    this.dashboardApi.putEditProduct({is_enabled: status ? 0 : 1}, id).subscribe(data => {
      if (data['success']) {
        this.snackBar.open(status ? '商品已關閉' : '商品已啟用', 'OK', {
          duration: 5000,
          horizontalPosition : 'right',
          panelClass: 'snack-bar__test' 
        });
      }
    });
  }
}
