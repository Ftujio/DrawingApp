import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	username = new FormControl('');
	email = new FormControl('');
	password = new FormControl('');
	confirmPassword = new FormControl('');

	loginForm: FormGroup = this.builder.group({
		username: this.username,
		email: this.email,
		password: this.password,
		confirmPassword: this.confirmPassword
	});

	constructor(private builder: FormBuilder) { }

	ngOnInit() {
	}

	login(){
		console.log(this.loginForm.value);
	}
}