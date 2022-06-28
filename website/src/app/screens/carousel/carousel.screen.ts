import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselOption } from 'src/app/components/carousel/carousel.component';
import { Button, ButtonType } from 'src/app/interfaces/widgets.interface';

export interface CarouselScreenConfig {
  screenTitle: string;
  carouselOptions: CarouselOption[];
  buttons: Button[];
}

@Component({
  selector: 'app-carousel-screen',
  templateUrl: './carousel.screen.html',
  styleUrls: ['./carousel.screen.scss'],
})
export class CarouselScreen implements OnInit {
  @Input() config = {} as CarouselScreenConfig;

  buttonType = ButtonType;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onButtonClick(button: Button) {
    if (button.internalUrl) {
      this.router.navigate([button.url]);
    } else {
      window.open(button.url, '_blank');
    }
  }
}
