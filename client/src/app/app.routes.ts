import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { PostImageComponent } from './components/post-image/post-image.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'post-image', component: PostImageComponent },
	{ path: '', component: TimelineComponent },
];

export const routing = RouterModule.forRoot(routes);
