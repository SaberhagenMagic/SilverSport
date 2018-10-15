import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APPROUTING } from './app.routes';
// Services
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { UseradminComponent } from './components/useradmin/useradmin.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
// Pipes
import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UseradminComponent,
    UserinfoComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APPROUTING
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
