import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.css']
})
export class PostImageComponent implements OnInit {
	user: Object;

	postImageForm: FormGroup = this.builder.group({
		title: new FormControl('', [
			Validators.required
		]),
		tagInput: new FormControl(''),
		tags: new FormArray([]),
	});

	constructor(
		private builder: FormBuilder,
		private _flashMessagesService: FlashMessagesService,
		private authService: AuthService,
		private router: Router,
		private http: Http
	) {

	}

  ngOnInit() {
		this.authService.getProfile().subscribe(profile => {
			this.user = profile.user;
		},
		err => {
			console.log(err);
			//return false;
		});
  }

	addTag(){
		let value = this.postImageForm.value.tagInput;
		let control = new FormControl(value, [
			Validators.required
		]);
		if(value != '') this.postImageForm.controls.tags['controls'].push(control);
		this.postImageForm.controls.tagInput.setValue('');

		console.log(this.postImageForm.controls.tags['controls']);
	}

	postImage(){
		if(this.postImageForm.valid){
			const picture = {
				author_name: this.user['username'],
				title: this.postImageForm.value.title,
				tags: this.postImageForm.value['tags']
			}

			console.log(this.postImageForm.value);

			let headers = new Headers();
			headers.append('Content-Type', 'application/json');
			this.http.post('http://localhost:3001/picture/post-picture', picture, {headers: headers}).map(res => res.json()).subscribe(data => {
				if(data.success){
					this.router.navigate(['/']);
				}
			});
		}
	}
}
