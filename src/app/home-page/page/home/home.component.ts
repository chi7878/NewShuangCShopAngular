import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeApiService } from './../../home-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activeRoute: string = '';
  cartList: object[] = [];
  constructor(private route: ActivatedRoute, private router:Router,
    private homeApi: HomeApiService) { }

  ngOnInit() {
    this.activeRoute = this.route.snapshot.routeConfig.path;
    if (this.activeRoute === 'product/:id' || this.activeRoute === 'products') {
      this.getCartList();
    }
  }

  goCheckOrder() {
    this.router.navigate(['/checkOrder']);
  }

  getCartList() {
    this.homeApi.getCart().subscribe(data => this.cartList = data['data']['carts'])
  }
}
