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
  tilesInFocus: number[] = [];

  private numberOfDisplayTiles = 0;
  private firstDisplayTileNumber = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setNumberOfTileDisplayNumber();
    this.setCarouselOptionsArray();
  }

  onArrowClick(goForward: boolean) {
    this.setFirstDisplayTileNumber(goForward);
    this.setCarouselOptionsArray();
  }

  onButtonClick(button: Button) {
    if (!button.url && !button.internalUrl) return;
    if (button.internalUrl) {
      this.router.navigate([button.url]);
    } else {
      window.open(button.url, '_blank');
    }
  }

  private setNumberOfTileDisplayNumber() {
    this.numberOfDisplayTiles =
      window.innerWidth < 900 ? 1 : window.innerWidth < 1500 ? 3 : 5;
  }

  private setCarouselOptionsArray() {
    this.tilesInFocus = [];
    let lastDisplayTileNumber =
      this.firstDisplayTileNumber + this.numberOfDisplayTiles;
    for (let i = this.firstDisplayTileNumber; i < lastDisplayTileNumber; i++) {
      this.tilesInFocus.push(
        this.numberOfDisplayTiles - 1 ? i - this.numberOfDisplayTiles : i
      );
    }
  }

  private setFirstDisplayTileNumber(goForward: boolean) {
    this.firstDisplayTileNumber = goForward
      ? this.firstDisplayTileNumber + 1
      : this.firstDisplayTileNumber - 1;

    if (goForward && this.firstDisplayTileNumber === this.options.length) {
      this.firstDisplayTileNumber = 0;
    }
    if (!goForward && this.firstDisplayTileNumber < 0) {
      this.firstDisplayTileNumber = this.options.length - 1;
    }
  }
}
