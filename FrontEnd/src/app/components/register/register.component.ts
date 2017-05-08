import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	loginForm: FormGroup = this.builder.group({
		'username': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
		'email': [null, Validators.required],
		'password': [null, Validators.required],
		'confirmPassword': [null, Validators.required],
	});

	constructor(private builder: FormBuilder) { }

	ngOnInit() {
	}

	login(){
		console.log(this.loginForm.valid);
	}
}
