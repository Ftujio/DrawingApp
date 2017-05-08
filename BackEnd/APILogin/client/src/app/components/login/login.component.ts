import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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

	constructor(private builder: FormBuilder) { }

	ngOnInit() {
	}

	login(){
		console.log(this.loginForm.valid);
	}

}
