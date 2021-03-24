import { Component, OnInit } from '@angular/core';
import { HomeApiService } from '../../home-api.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: any[] = [];
  originalProductList: Object[] = [];
  activeClass: string = '全部';
  page: number = 0;
  navigationSubscription;
  isLoaded: boolean = false;
  config = {
    a11y: true,
    autoHeight: true,
    slideToClickedSlide: true,
    watchSlidesProgress: true,
    scrollbar: false,
    navigation: true,
    pagination: false,
    centeredSlides: true,
    loop: true,
    roundLengths: true,
    spaceBetween: 50,
    autoplay: true
};
  constructor(private homeApi: HomeApiService, private router: Router, private route: ActivatedRoute) {
    this.navigationSubscription = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
      }
    })
  }

  ngOnInit(): void {
    if (this.route.snapshot.queryParams['status']) {
      this.activeClass = this.route.snapshot.queryParams['status'];
    }
    this.getProductData();
  }

  getProductData() {
    this.isLoaded = true;
    this.homeApi.getProductListAll().subscribe(data => {
      this.originalProductList = JSON.parse(JSON.stringify(data['products']));
      this.cutProductPage(this.originalProductList);
      this.isLoaded = false;
    })
  }

  cutProductPage(data) {
    this.productList = [];
    let list = [];

    if (this.activeClass === '全部') {
      list = data;
    } else {
      list = data.filter(product => product['category'] === this.activeClass);
    }

    for(let i = 0; i < list.length; i += 10) {
      this.productList.push(list.slice(i, i + 10));
    }
  }

  changeClass(status) {
    this.activeClass = status;
    this.page = 0;
    if (status === '全部') {
      this.cutProductPage(this.originalProductList);
    } else {
      this.cutProductPage(this.originalProductList.filter(product => product['category'] === status));
    }
  }

  changePage(status) {
    this.page = status === 'prev' ? this.page - 1 : (status === 'next' ? this.page + 1 : status - 1)
  }

  goProduct(id) {
    this.router.navigate(['/product', id]);
    window.scroll(0,0);
  }
}
