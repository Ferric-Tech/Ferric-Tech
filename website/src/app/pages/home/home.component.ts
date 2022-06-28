import { Component, OnInit } from '@angular/core';
import { CarouselOption } from 'src/app/components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  menu: CarouselOption[] = [
    {
      title: 'Projects',
      image: '../../../assets/projects-image.jpg',
    },
    {
      title: 'About us',
      image: '../../../assets/projects-image.jpg',
    },
    {
      title: 'Get in touch',
      image: '../../../assets/projects-image.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
