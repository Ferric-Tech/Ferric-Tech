import { Component, OnInit } from '@angular/core';
import { CarouselOption } from 'src/app/components/carousel/carousel.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {
  menu: CarouselOption[] = [
    {
      title: 'Go to myDayGoal',
      image: '../../../assets/myDayGoal-logo.png',
      url: 'https://mydaygoal.firebaseapp.com/',
      internalUrl: false,
    },
    {
      title: 'Go to e-Questrian',
      image: '../../../assets/equestrian-logo.png',
      url: '',
      internalUrl: false,
    },
    {
      title: 'Go to Negocio',
      image: '../../../assets/negocio-logo.jpeg',
      url: 'https://negocio-3df71.firebaseapp.com/',
      internalUrl: false,
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
