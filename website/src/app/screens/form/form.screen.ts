import { Component, Input } from '@angular/core';
import { FormItem } from 'src/app/components/form/form.component';
import { Button, ButtonType } from 'src/app/interfaces/widgets.interface';
import { WidgetCallBacksService } from 'src/app/services/widget-call-backs.service';

export interface FormScreenConfig {
  screenTitle: string;
  introParagraph: string;
  form: FormItem[];
  buttons: Button[];
}

@Component({
  selector: 'app-form-screen',
  templateUrl: './form.screen.html',
  styleUrls: ['./form.screen.scss'],
})
export class FormScreen {
  @Input() config = {} as FormScreenConfig;

  buttonType = ButtonType;

  constructor(private widgetCallBackService: WidgetCallBacksService) {}

  onButtonClick(button: Button) {
    this.widgetCallBackService.actionButton(button);
  }
}
