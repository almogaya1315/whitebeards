import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { RegisterComponent } from './users/register.component';
import { SignInComponent } from './users/sign-in.component';

const routes: Routes = [
  { path: 'catalog', component: CatalogComponent, },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  //{ path: 'users/register', component: RegisterComponent, },
  //{ path: 'users/sign-in', component: SignInComponent, },
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
