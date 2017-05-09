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
import { ProfileComponent } from './components/profile/profile.component';

// Services
import { PostService } from './services/post.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

import { routing } from './app.routes';

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
	providers: [ PostService, AuthService, AuthGuard ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
