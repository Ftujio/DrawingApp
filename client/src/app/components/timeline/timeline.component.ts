import { Component, OnInit } from '@angular/core';

import { PostService } from '../../services/post.service';

@Component({
	selector: 'app-timeline',
	templateUrl: './timeline.component.html',
	styleUrls: ['./timeline.component.css'],
	providers: [PostService]
})
export class TimelineComponent implements OnInit {

	data: Object;

	constructor(posts: PostService) {
		posts.getPosts().subscribe(data => {
			if(data.success){
				this.data = data.doc;
			}
		})
	}

	ngOnInit() {
	}

}
