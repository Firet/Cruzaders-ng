import { Component, EventEmitter, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options: AnimationOptions = {
    path: './assets/little-robot.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  complete(event:any){
    console.log('Event',event);

  }

}
