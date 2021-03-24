import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss']
})
export class LeftBarComponent implements OnInit {
  activeTab = 1;
  @Output() changeTabNum = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  changeTab(tab) {
    this.activeTab = tab;
    this.changeTabNum.emit(tab);
  }
}
