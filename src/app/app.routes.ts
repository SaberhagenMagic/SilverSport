import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UseradminComponent } from './components/useradmin/useradmin.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/login/register/register.component';

const APPROUTES: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'users', component: UseradminComponent },
  { path: 'user', component: UserinfoComponent },
  { path: 'user/:id', component: UserinfoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(APPROUTES);
