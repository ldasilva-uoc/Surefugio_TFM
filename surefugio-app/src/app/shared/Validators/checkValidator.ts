import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';

/**
 * Función que comprueba que los dos strings que hacen referencia a dos formControls que forman
 * parte del formGroup son inguales.
 * @return "equalValue": message si no son iguales, null en caso contrario
 */
 export function ConfirmedValidator(controlName: string, matchingControlName: string){
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
          return;
      }
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ confirmedValidator: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}