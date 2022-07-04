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
    this.setNumberOfTileDisplayNumber();
  }

  buttonType = ButtonType;
  numberOfDisplayTiles = 0;
  firstDisplayTileNumber = 0;
  tilesInFocus: number[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setNumberOfTileDisplayNumber();
    this.setCarouselOptionsArray(this.firstDisplayTileNumber);
  }

  private setNumberOfTileDisplayNumber() {
    this.numberOfDisplayTiles =
      window.innerWidth < 900 ? 1 : window.innerWidth < 1500 ? 3 : 5;
  }

  private setCarouselOptionsArray(n: number) {
    this.tilesInFocus = [];
    for (
      let i = this.firstDisplayTileNumber;
      i < this.firstDisplayTileNumber + this.numberOfDisplayTiles;
      i++
    ) {
      let numberToAdd = 0;
      if (i > this.numberOfDisplayTiles - 1) {
        numberToAdd = i - this.numberOfDisplayTiles;
      } else {
        numberToAdd = i;
      }
      this.tilesInFocus.push(numberToAdd);
    }
    console.log(this.tilesInFocus);
  }

  onArrowClick(goForward: boolean) {
    this.firstDisplayTileNumber = goForward
      ? this.firstDisplayTileNumber + 1
      : this.firstDisplayTileNumber - 1;

    if (goForward && this.firstDisplayTileNumber === this.options.length) {
      this.firstDisplayTileNumber = 0;
    }
    if (!goForward && this.firstDisplayTileNumber < 0) {
      this.firstDisplayTileNumber = this.options.length - 1;
    }

    this.setCarouselOptionsArray(this.firstDisplayTileNumber);
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
