import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { PostComponent } from './components/post/post.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// Services
import { PostService } from './services/post.service';

import { routing } from './app.routes';

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		TimelineComponent,
		PostComponent,
		LoginComponent,
		RegisterComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		routing
	],
	providers: [ PostService ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
