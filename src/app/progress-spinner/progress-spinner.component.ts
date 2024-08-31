import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {
  progress: number = 0;
  timer;
  myItms;
  isLoading = false;

  constructor() {
    // determinate
    // this.timer = setInterval(() => {
    //   this.progress++;
    //   if (this.progress === 100) {
    //     clearInterval(this.timer);
    //   }
    // }, 20);

    // indeterminate
    this.isLoading = true;

    this.getItems().subscribe(() => {
      // ...
      this.isLoading = false;
    });
  }

  ngOnInit(): void {
  }

  getItems(): Observable<any> {
    return timer(2000);
  }

}
