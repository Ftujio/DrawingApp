import { Component, OnInit } from '@angular/core';

import { PostService } from '../services/post.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  providers: [PostService]
})
export class TimelineComponent implements OnInit {

	constructor(posts: PostService) {
		console.log(posts.getPosts());
	}

	ngOnInit() {
	}

}
