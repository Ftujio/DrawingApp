import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.css']
})
export class PostImageComponent implements OnInit {
	title = new FormControl('');
	tags = new FormControl('');

	postImageForm: FormGroup = this.builder.group({
		title: this.title,
		tags: this.tags,
	});

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
  }

	postImage(){
		console.log(this.postImageForm.value);
	}

}
