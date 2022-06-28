import { Component, OnInit } from '@angular/core';
import { ButtonType } from 'src/app/interfaces/widgets.interface';
import { FormScreenConfig } from 'src/app/screens/form/form.screen';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  screenConfig = {} as FormScreenConfig;

  constructor() {}

  ngOnInit(): void {
    this.screenConfig = {} as FormScreenConfig;
    this.setScreenTile();
    this.setIntroParagraph();
    this.setScreenButtons();
  }

  private setScreenTile() {
    this.screenConfig.screenTitle = 'Contact us';
  }

  private setIntroParagraph() {
    this.screenConfig.introParagraph =
      'This it the form you fill in if you want to contact us';
  }

  private setScreenButtons() {
    this.screenConfig.buttons = [
      {
        type: ButtonType.SECONDARY,
        text: 'Back to Home Page',
        url: '',
        internalUrl: true,
      },
    ];
  }
}
