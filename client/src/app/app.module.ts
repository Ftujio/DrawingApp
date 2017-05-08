import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';

// Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { PostComponent } from './components/post/post.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PostImageComponent } from './components/post-image/post-image.component';

// Services
import { PostService } from './services/post.service';

import { routing } from './app.routes';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		TimelineComponent,
		PostComponent,
		LoginComponent,
		RegisterComponent,
		PostImageComponent,
		ProfileComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		FlashMessagesModule,
		routing
	],
	providers: [ PostService ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
