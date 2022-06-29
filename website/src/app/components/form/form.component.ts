import { Component, Input, OnInit } from '@angular/core';

export enum FormItemType {
  FREE_TEXT_SHORT,
  FREE_TEXT_LONG,
  SELECT,
}

export interface SelectOption {
  text: string;
  value: any;
}

export interface FormItem {
  type: FormItemType;
  title: string;
  options?: SelectOption[];
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
