import { Injectable } from '@angular/core';
import { FormScreenConfig } from '../screens/form/form.screen';

@Injectable({
  providedIn: 'root',
})
export class FormValidationService {
  constructor() {}

  validate(form: FormScreenConfig) {}
}
