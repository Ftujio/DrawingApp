import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.css']
})
export class PostImageComponent implements OnInit {
	postImageForm: FormGroup = this.builder.group({
		title: new FormControl('', [
			Validators.required
		]),
		tagInput: new FormControl(''),
		tags: new FormArray([]),
	});

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
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
		console.log(this.postImageForm.valid);
	}
}
