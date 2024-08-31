import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent implements OnInit {
  checked: boolean = true;

  items: any[] = [{ name: 'itm1', done: false }, { name: 'itm2', done: true }, { name: 'itm3', done: false }];

  constructor() { }

  ngOnInit(): void {
  }

  checkboxChanged(): void {
    console.log('>>>>>>>>>>', this.items);
  }

}
