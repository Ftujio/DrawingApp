import { Injectable } from '@angular/core';

@Injectable()
export class PostService {

	value: Object = {
		name: "asdasd",
		age: 35,
		color: "red"
	}

	constructor() { }

	getPosts(): Object{
		

		return this.value;
	}

}
