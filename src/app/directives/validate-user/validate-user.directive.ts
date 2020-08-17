import { Directive, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { CustomValidationService } from '../../services/custom-validation.service';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appValidateUser]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: forwardRef(() => ValidateUserDirective),
    multi: true
  }]
})
export class ValidateUserDirective implements Validator {

  constructor(private customValidator: CustomValidationService) { }

  validate(control: AbstractControl): Promise<{ [key: string]: any}> | Observable<{ [key: string]: any}> {
    return this.customValidator.userNameValidator(control);
  }

}
