import { Component, HostListener, Input, OnInit } from '@angular/core';
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
  @Input() options = [] as CarouselOption[];
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setNumberOfTiles();
  }

  buttonType = ButtonType;
  menuOption = 0;
  numberOfTiles: number[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setNumberOfTiles();
  }

  private setNumberOfTiles() {
    if (window.innerWidth < 900) {
      this.setImageIndexArray(1);
      return;
    }
    if (window.innerWidth < 1500) {
      this.setImageIndexArray(3);
      return;
    }
    this.setImageIndexArray(5);
  }

  private setImageIndexArray(n: number) {
    this.numberOfTiles = [];
    for (let i = 1; i < Math.min(n, this.options.length) + 1; i++) {
      this.numberOfTiles.push(i);
    }
  }

  onArrowClick(goForward: boolean) {
    if (goForward && this.menuOption + 1 === this.options.length) {
      this.menuOption = 0;
      return;
    }
    if (!goForward && this.menuOption === 0) {
      this.menuOption = this.options.length - 1;
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
