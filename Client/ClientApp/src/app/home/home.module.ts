import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { GeneratorComponent } from './generator/generator.component';
import { PasswordViewComponent } from './password-view/password-view.component';
import { FormsModule } from '@angular/forms';
import { HomeService } from './home.service';


@NgModule({
  declarations: [
    HomeComponent,
    GeneratorComponent,
    PasswordViewComponent
  ],
  providers: [
    HomeService
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class HomeModule { }