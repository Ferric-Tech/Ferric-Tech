import { Component, Input, OnInit } from '@angular/core';

export enum FormItemType {
  INPUT,
  SELECT,
}

export interface FormItem {
  type: FormItemType;
  title: string;
}

@Component({
  selector: 'app-form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() config: FormItem[] | undefined;

  formItemType = FormItemType;
  constructor() {}

  ngOnInit(): void {}
}
