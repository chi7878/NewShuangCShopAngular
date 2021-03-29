import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DashboardApiService } from '../../dashboard-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss']
})
export class LeftBarComponent implements OnInit {
  activeTab = 1;
  @Output() changeTabNum = new EventEmitter<string>();
  constructor(private dashboardApi: DashboardApiService, private router: Router) { }

  ngOnInit(): void {
  }

  changeTab(tab) {
    this.activeTab = tab;
    this.changeTabNum.emit(tab);
  }

  logout() {
    this.dashboardApi.postLogout().subscribe(data => {
      if (data['success']) {
        document.cookie = "hexToken= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
        this.dashboardApi.cookies = '';
        this.router.navigate(['/innerLogin']);
      }
    })
  }
}
