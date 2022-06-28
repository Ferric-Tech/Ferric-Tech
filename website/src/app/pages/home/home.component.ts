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
      url: '/projects',
    },
    {
      title: 'Learn about us',
      image: '../../../assets/about-us-image.jpg',
      url: '',
    },
    {
      title: 'Get in touch',
      image: '../../../assets/contact-us-image.jpg',
      url: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
