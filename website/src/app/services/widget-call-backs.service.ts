import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Button, ButtonAction } from '../interfaces/widgets.interface';

@Injectable({
  providedIn: 'root',
})
export class WidgetCallBacksService {
  constructor(private router: Router) {}

  actionButton(button: Button) {
    switch (button.action) {
      case ButtonAction.NAVIGATE: {
        if (button.internalUrl) {
          this.router.navigate([button.url]);
        } else {
          window.open(button.url, '_blank');
        }
      }
    }
  }
}
