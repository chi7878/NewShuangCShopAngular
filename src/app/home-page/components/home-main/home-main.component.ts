import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit {
  featureList: Object[] = [
    { img: 'undraw-Savings-re-eq4w', title: '商品免運費免手續費', text: '刷卡或分期付款也無須額外收費' },
    { img: 'undraw-On-the-way-re-swjt', title: '超速宅配', text: '超快速宅配三天就到你家門口' },
    { img: 'undraw-travel-together-re-kjf2', title: '保固1年', text: '商品全球都可維修' },
  ];
  activeFeatureTab: number = 0;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  changeFeature(status) {
    if (status === 'prev') {
      this.activeFeatureTab = this.activeFeatureTab - 1 < 0 ? this.featureList.length - 1 : this.activeFeatureTab - 1;
    } else {
      this.activeFeatureTab = this.activeFeatureTab + 1 > this.featureList.length - 1 ? 0 : this.activeFeatureTab + 1;
    }
  }

  goProducts() {
    this.router.navigate(['/products']);
    window.scroll(0,0);
  }
  
  goProduct(id) {
    this.router.navigate(['/product', id]);
    window.scroll(0,0);
  }

  goClass(status) {
    this.router.navigate([`/products`], {queryParams:{status}});
    window.scroll(0,0);
  }
}
