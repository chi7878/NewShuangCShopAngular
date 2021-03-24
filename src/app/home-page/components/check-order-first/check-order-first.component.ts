import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HomeApiService } from '../../home-api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-order-first',
  templateUrl: './check-order-first.component.html',
  styleUrls: ['./check-order-first.component.scss']
})
export class CheckOrderFirstComponent implements OnInit {
  finalTotal: number = 0;
  total: number = 0;
  salePrice:number = 0;
  cartList : any[] = [];
  coupon = new FormGroup({
    value: new FormControl(''),
    alert: new FormControl('')
  });
  isLoaded:boolean = false;
  @Output() nextStep = new EventEmitter();
  constructor(private homeApi: HomeApiService, private router: Router) { }

  ngOnInit(): void {
    this.isLoaded = true;
    this.getCartList();
  }

  getCartList() {
    this.homeApi.getCart().subscribe(data => {
      this.cartList = data['data']['carts'];
      this.cartList.forEach(item => item['isLoaded'] = false);
      this.finalTotal = Math.round(data['data']['final_total']);
      this.total = data['data']['total'];
      this.salePrice = this.finalTotal - this.total;
      if (data['data']['carts'].length === 0) {
        this.router.navigate(['/products'])
      }
      this.isLoaded = false;
    });
  }

  addCoupon() {
    this.homeApi.postCoupon(this.coupon.get('value').value).subscribe(data => {
      this.finalTotal = data['message'] === '找不到優惠券!' ? this.total : Math.round(data['data']['final_total']);
      this.salePrice = this.finalTotal - this.total;
      this.coupon.get('alert').setValue(data['message']);
    })
  }

  deleteCart(product) {
    product['isLoaded'] = true;
    this.homeApi.deleteCart(product.id).subscribe(data => {
      product['isLoaded'] = false;
      this.getCartList();
    })
  }

  next() {
    this.nextStep.emit();
  }
}
