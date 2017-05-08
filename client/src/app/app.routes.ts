import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { PostImageComponent } from './components/post-image/post-image.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
	{ path: '', component: TimelineComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'post-image', component: PostImageComponent },
	{ path: 'profile', component: ProfileComponent },
];

export const routing = RouterModule.forRoot(routes);
