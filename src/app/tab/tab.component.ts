import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  currentIndex;

  constructor() { }

  ngOnInit(): void {
  }

  tabChange(event): void {
    // console.log(event);
    this.currentIndex = event.index;
  }

  test(){
    this.currentIndex = 0;
  }

}
