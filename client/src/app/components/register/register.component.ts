import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';

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

	constructor(
		private builder: FormBuilder,
		private _flashMessagesService: FlashMessagesService,
		private authService: AuthService,
		private router: Router
	) {

	}

	detectChanges(){
		console.log('changed');
	}

	ngOnInit() {
	}

	login(){
		if(!this.loginForm.controls.username.valid){
			this._flashMessagesService.show('Missing username', {cssClass: 'alert-danger', timeout: 5000});
		} else if(!this.loginForm.controls.email.valid){
			this._flashMessagesService.show('Wrong email', {cssClass: 'alert-danger', timeout: 5000});
		} else if(!this.loginForm.controls.password.valid){
			this._flashMessagesService.show('Missing password', {cssClass: 'alert-danger', timeout: 5000});
		} else if(!this.loginForm.controls.confirmPassword.valid){
			this._flashMessagesService.show('Missing password', {cssClass: 'alert-danger', timeout: 5000});
		}

		if(this.loginForm.valid){
			const user = {
				username: this.loginForm.value.username,
				email: this.loginForm.value.email,
				password: this.loginForm.value.password,
			}

			this.authService.registerUser(user).subscribe(data => {
				if(data.success){
					this._flashMessagesService.show('Registered successfully', {cssClass: 'alert-success', timeout: 3000});
					this.router.navigate(['/login']);
				} else {
					//this._flashMessagesService.show('Something went wrong', {cssClass: 'alert-success', timeout: 3000});
					this.router.navigate(['/register']);
				}
			});
		}
	}
}
