import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { LoginRoutingModule } from "./login-routing.module";

import { UserService } from "../login/user.service";

import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [
    LoginComponent
  ],
  providers: [
    UserService
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})

export class LoginModule { }