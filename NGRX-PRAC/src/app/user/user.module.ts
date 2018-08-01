import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';
// NgRx
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './state/users.reducer';



const userRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('users', usersReducer) // users is the name of the state and we need to subscribe to this in the component
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }
