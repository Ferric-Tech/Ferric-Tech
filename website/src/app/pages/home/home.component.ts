import { Component, OnInit } from '@angular/core';
import { CarouselOption } from 'src/app/components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  menu: CarouselOption[] = [
    { title: 'Projects' },
    { title: 'About us' },
    { title: 'Get in touch' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
