import { Component, OnInit } from '@angular/core';
import { FormItemType } from 'src/app/components/form/form.component';
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
    this.setForm();
    this.setScreenButtons();
  }

  private setScreenTile() {
    this.screenConfig.screenTitle = 'Contact us';
  }

  private setIntroParagraph() {
    this.screenConfig.introParagraph =
      'This it the form you fill in if you want to contact us';
  }

  private setForm() {
    this.screenConfig.form = [
      {
        type: FormItemType.FREE_TEXT_SHORT,
        title: 'Name',
      },
      {
        type: FormItemType.FREE_TEXT_SHORT,
        title: 'Email',
      },
      {
        type: FormItemType.FREE_TEXT_SHORT,
        title: 'Contact number',
      },
      {
        type: FormItemType.SELECT,
        title: 'Topic',
        options: [
          { text: 'Project idea', value: 'Project idea' },
          { text: 'Consultaltion request', value: 'Consultaltion request' },
          { text: 'Seeking work', value: 'Seeking work' },
        ],
      },
      {
        type: FormItemType.FREE_TEXT_LONG,
        title: 'Comment / Additional info',
      },
    ];
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
