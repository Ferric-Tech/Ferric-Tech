import { Component, OnInit } from '@angular/core';
import { FormItemType } from 'src/app/components/form/form.component';
import { ButtonAction, ButtonType } from 'src/app/interfaces/widgets.interface';
import { FormScreenConfig } from 'src/app/screens/form/form.screen';
import { FormValidationService } from 'src/app/services/form-validation.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  screenConfig = {} as FormScreenConfig;

  constructor(private formValidationService: FormValidationService) {}

  ngOnInit(): void {
    this.formValidationService._validationReponse.subscribe((reponse) => {
      if (!Object.keys(reponse).length) return;
      console.log(reponse);
    });

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
        fieldName: 'name',
        required: true,
      },
      {
        type: FormItemType.FREE_TEXT_SHORT,
        title: 'Email',
        fieldName: 'email',
        required: true,
      },
      {
        type: FormItemType.FREE_TEXT_SHORT,
        title: 'Contact number',
        fieldName: 'contact-number',
        required: false,
      },
      {
        type: FormItemType.SELECT,
        title: 'Topic',
        fieldName: 'topic',
        options: [
          { text: 'Project idea', value: 'Project idea' },
          { text: 'Consultaltion request', value: 'Consultaltion request' },
          { text: 'Seeking work', value: 'Seeking work' },
        ],
        required: true,
      },
      {
        type: FormItemType.FREE_TEXT_LONG,
        title: 'Comment / Additional info',
        fieldName: 'comment',
        required: false,
      },
    ];
  }

  private setScreenButtons() {
    this.screenConfig.buttons = [
      {
        type: ButtonType.PRIMARY,
        text: 'Submit form',
        action: ButtonAction.SUMBIT,
      },
      {
        type: ButtonType.SECONDARY,
        text: 'Back to Home Page',
        action: ButtonAction.NAVIGATE,
        url: '',
        internalUrl: true,
      },
    ];
  }
}
