import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { GeneratorComponent } from './generator/generator.component';
import { PasswordViewComponent } from './password-view/password-view.component';


@NgModule({
  declarations: [
    HomeComponent,
    GeneratorComponent,
    PasswordViewComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class HomeModule { }
