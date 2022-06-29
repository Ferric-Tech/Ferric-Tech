import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormItem } from 'src/app/components/form/form.component';
import { Button, ButtonType } from 'src/app/interfaces/widgets.interface';

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
export class FormScreen implements OnInit {
  @Input() config = {} as FormScreenConfig;

  buttonType = ButtonType;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.config);
  }

  onButtonClick(button: Button) {
    if (button.internalUrl) {
      this.router.navigate([button.url]);
    } else {
      window.open(button.url, '_blank');
    }
  }
}
