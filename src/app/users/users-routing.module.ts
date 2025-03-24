import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register.component';
import { SignInComponent } from './sign-in.component';

const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'sign-in', component: SignInComponent }
    // these would be appended to the app-routing's root with a backSlash (/)
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // the app-routing calls 'forRoot' beacuse it handles routes at the root of the website
  // the feaute-module-routing calls 'forChild' because it handles child routes just for the feature-module
  // * must add the feaute-module-routing to the feature-module imports
  // * must remove eagerly loading in app.module of the feature-module
  exports: [RouterModule]
})
export class UsersRoutingModule { }