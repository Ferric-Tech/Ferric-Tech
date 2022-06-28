import { Component, Input, OnInit } from '@angular/core';

export interface CarouselOption {
  title: string;
  image: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() menu = [] as CarouselOption[];

  menuOption = 0;

  constructor() {}

  ngOnInit(): void {}

  arrowClicked(goForward: boolean) {
    if (goForward && this.menuOption + 1 === this.menu.length) {
      this.menuOption = 0;
      return;
    }
    if (!goForward && this.menuOption === 0) {
      this.menuOption = this.menu.length - 1;
      return;
    }
    this.menuOption = goForward ? this.menuOption + 1 : this.menuOption - 1;
  }
}
