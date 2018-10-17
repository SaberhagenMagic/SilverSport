import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { APPROUTING } from './app.routes';
// Services
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
// Components
import { AppComponent } from './app.component';
import { UseradminComponent } from './components/useradmin/useradmin.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { LoginComponent } from './components/login/login.component';
// Pipes
import { KeysPipe } from './pipes/keys.pipe';
import { RegisterComponent } from './components/login/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    UseradminComponent,
    UserinfoComponent,
    KeysPipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule,
    HttpModule,
    APPROUTING
  ],
  providers: [
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
