import { Directive } from '@angular/core';
import { Validators } from '@angular/forms';

/* @Directive({
  selector: '[appConfirmPassword]'
}) */
export function ConfirmPasswordDirective(control) {
  
  if(control.value.confirmPassword != control.value.password ){
    
    return {confirmPassword:true};
  }
  
  return null;
}
