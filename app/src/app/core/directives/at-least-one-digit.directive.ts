import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';

@Directive({
    selector: '[appAtLeastOneDigit]',
    providers: [{ provide: NG_VALIDATORS, useExisting: AtLeastOneDigitDirective, multi: true }]
})
export class AtLeastOneDigitDirective implements Validator {

    constructor() { }

    validate(control: AbstractControl): { [key: string]: any } | null {
        return !/\d/.test(control.value) ? { containsAtLeastOneDigit: true} : null;
    }
}
