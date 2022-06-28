import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, ButtonType } from 'src/app/interfaces/widgets.interface';

export interface CarouselOption {
  title?: string;
  image: string;
  buttons: Button[];
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() menu = [] as CarouselOption[];

  buttonType = ButtonType;
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

  onButtonClick(button: Button) {
    if (!button.url && !button.internalUrl) return;
    if (button.internalUrl) {
      this.router.navigate([button.url]);
    } else {
      window.open(button.url, '_blank');
    }
  }
}
