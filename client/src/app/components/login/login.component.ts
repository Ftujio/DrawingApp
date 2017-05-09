import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup = this.builder.group({
		username: new FormControl('', [
			Validators.required
		]),
		password: new FormControl('', [
			Validators.required
		]),
	});

	constructor(
		private builder: FormBuilder,
		private authService: AuthService,
		private router: Router,
		private _flashMessagesService: FlashMessagesService
	) { }

	ngOnInit() {
	}

	login(){
		if(this.loginForm.valid){
			const user = {
				username: this.loginForm.value.username,
				password: this.loginForm.value.password
			}

			this.authService.authenticateUser(user).subscribe(data => {
				if(data.success){
					this.authService.storeUserData(data.token, data.user);
					this.router.navigate(['/profile']);
				} else {
					//this._flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
					this.router.navigate(['/login']);
				}
			});
		}
	}

}
