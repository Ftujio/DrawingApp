import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { CustomFromValidator } from '../../validators/form';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	customFormValidator = new CustomFromValidator();

	loginForm: FormGroup = this.builder.group({
		username: new FormControl('', [
			Validators.required,
			Validators.minLength(5),
			Validators.maxLength(10)
		]),
		email: new FormControl('', [
			Validators.required,
			this.customFormValidator.isEmail
		]),
		password: new FormControl('', [
			Validators.required
		]),
		confirmPassword: new FormControl('', [
			Validators.required
		]),
	});

	constructor(private builder: FormBuilder) {

	}

	ngOnInit() {
	}

	login(){
		console.log(this.loginForm.valid);
	}
}
