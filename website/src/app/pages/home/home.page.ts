import { Component, OnInit } from '@angular/core';
import { CarouselOption } from 'src/app/components/carousel/carousel.component';
import { ButtonType } from 'src/app/interfaces/widgets.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  menu: CarouselOption[] = [
    {
      image: '../../../assets/projects-image.jpg',
      buttons: [
        {
          text: 'View our Projects',
          type: ButtonType.PRIMARY,
          url: '/projects',
          internalUrl: true,
        },
      ],
    },
    {
      title: 'Learn about us',
      image: '../../../assets/about-us-image.jpg',
      buttons: [
        {
          text: 'Learn about us',
          type: ButtonType.PRIMARY,
          url: '/about',
          internalUrl: true,
        },
      ],
    },
    {
      title: 'Get in touch',
      image: '../../../assets/contact-us-image.jpg',
      buttons: [
        {
          text: 'Get in touch',
          type: ButtonType.PRIMARY,
          url: '/contact',
          internalUrl: true,
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
