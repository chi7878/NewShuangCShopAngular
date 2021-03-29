import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-order-info-popup',
  templateUrl: './order-info-popup.component.html',
  styleUrls: ['./order-info-popup.component.scss']
})
export class OrderInfoPopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  totalPrice(price) {
    return Math.round(price);
  }

}
