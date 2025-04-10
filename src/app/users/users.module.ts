import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { RegisterComponent } from "./register.component";
import { SignInComponent } from "./sign-in.component";
//import { UserRepositoryService } from "../services/user-repository.service";
import { SharedModule } from "../Shared/shared.module";
import { UsersRoutingModule } from "./users-routing.module";

@NgModule({
        imports: [SharedModule, RouterModule, FormsModule, ReactiveFormsModule, UsersRoutingModule],
        declarations: [RegisterComponent, SignInComponent],
        exports: [],
        providers: [] //UserRepositoryService
})
export class UsersModule {};