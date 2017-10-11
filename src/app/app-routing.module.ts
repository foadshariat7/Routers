import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Notfound404Component } from './notfound-404/notfound-404.component';
import { EditAccountComponent } from './accounts/edit-account/edit-account.component';
import { AccountsComponent } from './accounts/accounts.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: UsersComponent,
    children: [
      { path: ':id', component: UserComponent },
      { path: ':id/edit', component: EditUserComponent },
    ] },
    { path: 'accounts', component: AccountsComponent },
    { path: 'accounts/:id/edit', component: EditAccountComponent },
    { path: 'not-found', component: Notfound404Component},
    { path: '**', redirectTo: '/not-found' }
  ];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {
}
