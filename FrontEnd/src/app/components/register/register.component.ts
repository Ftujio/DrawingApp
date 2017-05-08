import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

import { isEmail, passwordConfirmed, password } from '../../validators/form';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	loginForm: FormGroup = this.builder.group({
		username: new FormControl('', [
			Validators.required,
			Validators.minLength(5),
			Validators.maxLength(10)
		]),
		email: new FormControl('', [
			Validators.required,
			isEmail
		]),
		password: new FormControl('', [
			Validators.required,
			password
		]),
		confirmPassword: new FormControl('', [
			Validators.required,
			passwordConfirmed
		]),
	});

	constructor(private builder: FormBuilder, private _flashMessagesService: FlashMessagesService) {
		
	}

	ngOnInit() {
	}

	login(){
		console.log(this.loginForm.valid);
	}
}
