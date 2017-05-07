import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

	value: Object = {
		name: "asdasd",
		age: 35,
		color: "red"
	}

	url: string = "http://localhost:4200/src/app/services/posts.json";

	constructor(private http: Http) { }

	getPosts(){
		return this.http.get(this.url).map(response => response.json());
	}

}
