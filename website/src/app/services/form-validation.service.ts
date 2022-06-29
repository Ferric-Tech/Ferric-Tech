import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormItem } from '../components/form/form.component';

export enum ValidationErrorType {
  REQUIRED,
}

export interface ValidationError {
  fieldName: string;
  errorType: ValidationErrorType;
}

export interface FormValidationResponse {
  isValid: boolean;
  validationErrors: ValidationError[];
}

@Injectable({
  providedIn: 'root',
})
export class FormValidationService {
  private validationReponse = new BehaviorSubject<FormValidationResponse>(
    {} as FormValidationResponse
  );
  _validationReponse = this.validationReponse.asObservable();

  constructor() {}

  validate(form: FormItem[], formValues: object) {
    const response = this.validationTest(form, formValues);
    this.validationReponse.next(response);
  }

  validationTest(form: FormItem[], formValues: object): FormValidationResponse {
    let response = {
      isValid: true,
      validationErrors: [],
    } as FormValidationResponse;

    Object.keys(formValues).forEach((key) => {
      let value = formValues[key as keyof {}];
      if (!value) {
        for (let i = 0; i < form.length; i++) {
          if (form[i].fieldName === key && form[i].required) {
            response.isValid = false;
            response.validationErrors.push({
              fieldName: form[i].title,
              errorType: ValidationErrorType.REQUIRED,
            });
            break;
          }
        }
      }
    });
    return response;
  }
}
