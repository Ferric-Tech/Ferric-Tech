import { Component, Input, OnInit } from '@angular/core';

export enum FormItemType {
  TEXT_SHORT,
  TEXT_LONG,
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
