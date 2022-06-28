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
      title: 'View our Projects',
      image: '../../../assets/projects-image.jpg',
    },
    {
      title: 'Learn about us',
      image: '../../../assets/about-us-image.jpg',
    },
    {
      title: 'Get in touch',
      image: '../../../assets/contact-us-image.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
