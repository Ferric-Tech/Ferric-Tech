import { Component, OnInit } from '@angular/core';
import { CarouselOption } from 'src/app/components/carousel/carousel.component';
import { Button, ButtonType } from 'src/app/interfaces/widgets.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {
  backHomeButton: Button = {
    type: ButtonType.SECONDARY,
    text: 'Back to Home Page',
    url: '',
    internalUrl: true,
  };

  menu: CarouselOption[] = [
    {
      image: '../../../assets/myDayGoal-logo.png',
      buttons: [
        {
          text: 'Go to myDayGoal',
          type: ButtonType.PRIMARY,
          url: 'https://mydaygoal.firebaseapp.com/',
          internalUrl: false,
        },
        this.backHomeButton,
      ],
    },
    {
      image: '../../../assets/equestrian-logo.png',
      buttons: [
        {
          text: 'Go to e-Questrian',
          type: ButtonType.PRIMARY,
          url: '',
          internalUrl: false,
        },
        this.backHomeButton,
      ],
    },
    {
      title: 'Go to Negocio',
      image: '../../../assets/negocio-logo.jpeg',
      buttons: [
        {
          text: 'Go to Negocio',
          type: ButtonType.PRIMARY,
          url: 'https://negocio-3df71.firebaseapp.com/',
          internalUrl: false,
        },
        this.backHomeButton,
      ],
    },
  ];
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
