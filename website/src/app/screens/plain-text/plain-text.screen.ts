import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, ButtonType } from 'src/app/interfaces/widgets.interface';

export interface PlainTextScreenConfig {
  screenTitle: string;
  paragraphs: string[];
  buttons: Button[];
}

@Component({
  selector: 'app-plain-text-screen',
  templateUrl: './plain-text.screen.html',
  styleUrls: ['./plain-text.screen.scss'],
})
export class PlainTextScreen implements OnInit {
  @Input() config = {} as PlainTextScreenConfig;

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
