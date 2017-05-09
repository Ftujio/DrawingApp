import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

	constructor(
		private builder: FormBuilder,
		private authService: AuthService,
		private router: Router,
		private _flashMessagesService: FlashMessagesService
	) { }

  ngOnInit() {
  }

	onLogout(){
		this.authService.logout();
		this.router.navigate['login'];
	}

}
