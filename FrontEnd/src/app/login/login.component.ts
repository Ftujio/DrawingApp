import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	username = new FormControl('');
	password = new FormControl('');

	loginForm: FormGroup = this.builder.group({
		username: this.username,
		password: this.password,
	});

	constructor(private builder: FormBuilder) { }

	ngOnInit() {
	}

	login(){
		console.log(this.loginForm.value);
	}

}
