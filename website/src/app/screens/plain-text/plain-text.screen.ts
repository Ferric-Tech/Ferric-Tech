import { Component, Input, OnInit } from '@angular/core';

export interface PlainTextScreenConfig {
  screenTitle: string;
  paragraphs: string[];
}

@Component({
  selector: 'app-plain-text-screen',
  templateUrl: './plain-text.screen.html',
  styleUrls: ['./plain-text.screen.scss'],
})
export class PlainTextScreen implements OnInit {
  @Input() config = {} as PlainTextScreenConfig;
  constructor() {}

  ngOnInit(): void {}
}
