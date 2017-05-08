import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.css']
})
export class PostImageComponent implements OnInit {
	title = new FormControl('');
	tagInput = new FormControl();
	tags = new FormArray([]);

	postImageForm: FormGroup = this.builder.group({
		title: this.title,
		tagInput: this.tagInput,
		tags: this.tags,
	});

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
  }

	postImage(){
		console.log(this.postImageForm.value);
	}

	addTag(){
		let value = this.postImageForm.value.tagInput;
		if(value != '') this.tags.push(new FormControl(value));
		this.postImageForm.controls.tagInput.setValue('');
	}

}
