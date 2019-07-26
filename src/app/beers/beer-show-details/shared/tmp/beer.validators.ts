/* import { FormControl, FormArray, ValidationErrors } from '@angular/forms';

export class BeerValidators {

  static idFormat(control: FormControl): ValidationErrors | null {
    if (!control.value) { return null; }

    const numbers = control.value.replace(/-/g, '');
    const idPattern = /(^\d{10}$)|(^\d{13}$)/;

    if (idPattern.test(numbers)) {
      return null;
    } else {
      return {
        idFormat: { valid: false }
      };
    }
  }

  static atLeastOneAuthor(controlArray: FormArray): ValidationErrors | null {
    if (controlArray.controls.some(el => el.value)) {
      return null;
    } else {
      return {
        atLeastOneAuthor: { valid: false }
      };
    }
  }

}
 */