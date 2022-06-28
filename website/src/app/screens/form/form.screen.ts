import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Button,
  ButtonType,
  FormLine,
} from 'src/app/interfaces/widgets.interface';

export interface FormScreenConfig {
  screenTitle: string;
  introParagraph: string;
  form: FormLine[];
  buttons: Button[];
}

@Component({
  selector: 'app-form-screen',
  templateUrl: './form.screen.html',
  styleUrls: ['./form.screen.scss'],
})
export class FormScreen implements OnInit {
  @Input() config = {} as FormScreenConfig;

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
