import { FormControl } from '@angular/forms';

let pass = '';

export const isEmail = function(c: FormControl) {
	let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return EMAIL_REGEXP.test(c.value) ? null : {
		isEmail: {
			valid: false
		}
	};
}

export const password = function(c: FormControl){
	pass = c.value;

	return 1 ? null : {
		passwordConfirmed: {
			valid: false
		}
	};
}

export const passwordConfirmed = function(c: FormControl) {

	return pass == c.value ? null : {
		passwordConfirmed: {
			valid: false
		}
	};
}
