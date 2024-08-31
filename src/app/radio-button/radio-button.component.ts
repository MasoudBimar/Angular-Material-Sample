import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {

  grade: number;

  items: any[] = [{ name: 'itm1', idx: 1 }, { name: 'itm2', idx: 2 }, { name: 'itm3', idx: 3 }];

  constructor() { }

  ngOnInit(): void {
  }

}
