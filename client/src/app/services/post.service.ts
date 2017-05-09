import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

	url: string = "http://localhost:3001/picture/get-pictures";

	constructor(private http: Http) { }

	getPosts(){
		return this.http.get(this.url).map(response => response.json());
	}

}
