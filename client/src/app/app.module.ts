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
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PostImageComponent } from './components/post-image/post-image.component';
import { ProfileComponent } from './components/profile/profile.component';

// Services
import { PostService } from './services/post.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

import { routing } from './app.routes';
import { DrawImageComponent } from './components/draw-image/draw-image.component';

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		TimelineComponent,
		LoginComponent,
		RegisterComponent,
		PostImageComponent,
		ProfileComponent,
		DrawImageComponent
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
