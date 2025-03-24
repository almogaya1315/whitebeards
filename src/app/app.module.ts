import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CatalogComponent } from "./catalog/catalog.component";
//import { RegisterComponent } from "./users/register.component";
//import { SignInComponent } from "./users/sign-in.component";
//import { LoadingSpinnerComponent } from "./Shared/loading-spinner.component";
//import { UserRepositoryService } from "./services/user-repository.service"
//import { CatalogRepositoryService } from "./catalog/catalog-repository.service"
import { CoreModule } from './Core/core.module';
//import { SharedModule } from './Shared/shared.module';
import { CatalogModule } from './catalog/catalog.module';
//import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    //CatalogComponent,
    //RegisterComponent,
    //SignInComponent,
    //LoadingSpinnerComponent,
  ],
  imports: [
    CoreModule,
    //SharedModule,
    CatalogModule,
    //UsersModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [], //CatalogRepositoryService], //UserRepositoryService
  bootstrap: [AppComponent]
})
export class AppModule { }
