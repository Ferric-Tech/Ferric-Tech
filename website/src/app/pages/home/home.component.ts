import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  menu = ['Projects', 'About us', 'Get in touch'];
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
