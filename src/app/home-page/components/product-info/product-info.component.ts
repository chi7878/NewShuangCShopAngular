import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeApiService } from '../../home-api.service';
import { MatDialog } from '@angular/material/dialog';
import { NoticePopupComponent } from '../notice-popup/notice-popup.component';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  productId:string = '';
  productInfo:object = {};
  num: number = 1;
  allNum: number = 1;
  isLoaded:boolean = false;
  @Output() updateCartList = new EventEmitter();
  constructor(private homeApi: HomeApiService, private route: ActivatedRoute,private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.getProductInfo();
  }

  getProductInfo() {
    this.isLoaded = true;
    this.homeApi.getProductInfo(this.productId).subscribe(data => {
      this.productInfo = data['product'];
      this.allNum = this.productInfo['num'];
      this.isLoaded = false;
    })
  }

  changeNum(status) {
    if (status === 'next') {
      this.num = this.allNum === this.num ? this.num : this.num + 1;
    } else {
      this.num = this.num === 1 ? 1 : this.num - 1;
    }
  }

  backPage() {
    this.router.navigate(['/products']);
  }

  addCart(buy?) {
    this.homeApi.postAddCart(this.productId, this.num).subscribe(data => {
      if (buy) {
        this.router.navigate(['/checkOrder'])
      } else {
        this.dialog.open(NoticePopupComponent, {
          height: '150px',
          width: '300px',
          data: {
            title: '已加入購物車'
          }
        });
        this.updateCartList.emit();
      }
    });
  }

}
