import { Injectable } from "@angular/core";
import { ValidatorFn, AbstractControl, Form } from "@angular/forms";
import { FormGroup } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})

export class passwordValidatorService {
    patternValidator(): ValidatorFn { // receives control and synchronously return a map of validator errors if present, otherwise null
        return (control: AbstractControl): { [key: string]: any } => { // instantiating control
            if (!control.value) {
                return null!; // if no value in the control
            }
            const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'); // check uppercase, lowercase, number, 8 characters ({8,20 up to 20})
            const valid = regex.test(control.value);
            return valid ? null! : { invalidPassword: true }; // throw an error or exception when test fails
        }
    }

    matchPassword(password: string, confirmPassword: string):ValidatorFn {
        return (control: AbstractControl) => {
            const passwordControl = control.get(password);
            const confirmPasswordControl = control.get(confirmPassword);
            if (!passwordControl || !confirmPasswordControl) {
                if(!passwordControl){
                    console.log("no passwordcontrol")
                }
                if(!confirmPasswordControl){
                    console.log("no confirmpassword")
                }
                console.log("first point");
                return null;
            }
            if (confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMismatch']) {
                console.log("second point");
                return null;
            }
            if (passwordControl.value !== confirmPasswordControl.value) {
                console.log("third point");
                confirmPasswordControl.setErrors({ passwordMismatch: true });
            }
            else {
                console.log("fourth point");
                confirmPasswordControl.setErrors(null);
            }
            console.log("fifth point");
            return null;
        }
    }

    constructor() { }
}