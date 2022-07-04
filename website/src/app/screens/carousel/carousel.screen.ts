import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { CarouselOption } from 'src/app/components/carousel/carousel.component';
import { Button, ButtonType } from 'src/app/interfaces/widgets.interface';
import { WidgetCallBacksService } from 'src/app/services/widget-call-backs.service';

export interface CarouselScreenConfig {
  screenTitle: string;
  carouselOptions: CarouselOption[];
  buttons: Button[];
}

@Component({
  selector: 'app-carousel-screen',
  templateUrl: './carousel.screen.html',
  styleUrls: ['./carousel.screen.scss'],
})
export class CarouselScreen {
  @Input() config = {} as CarouselScreenConfig;

  buttonType = ButtonType;
  buttonWidth: string | undefined;

  constructor(
    private widgetCallBackService: WidgetCallBacksService,
    private cd: ChangeDetectorRef
  ) {}

  onButtonClick(button: Button) {
    this.widgetCallBackService.actionButton(button);
  }

  setButtonWidth(width: number) {
    this.buttonWidth = width ? width + 'px' : '0px';
    this.cd.detectChanges();
  }
}
