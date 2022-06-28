import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface CarouselOption {
  title: string;
  image: string;
  url: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() menu = [] as CarouselOption[];

  menuOption = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onArrowClick(goForward: boolean) {
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

  onButtonClick() {
    this.router.navigate([this.menu[this.menuOption].url]); // define your component where you want to go
  }
}
