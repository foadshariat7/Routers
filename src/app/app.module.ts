import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { AccountsComponent } from './accounts/accounts.component';
import { UserComponent } from './users/user/user.component';
import { EditAccountComponent } from './accounts/edit-account/edit-account.component';
import { UserService } from './users/user.service';
import { Notfound404Component } from './notfound-404/notfound-404.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth-guard.service';
import { LoginService } from './login-service.service';
import { CanDeactivateGuard } from './users/edit-user/can-deactivate-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    EditUserComponent,
    AccountsComponent,
    UserComponent,
    EditAccountComponent,
    Notfound404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserService, AuthGuard, LoginService, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
