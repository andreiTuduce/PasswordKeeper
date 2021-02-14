import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { GeneratorComponent } from './generator/generator.component';
import { PasswordViewComponent } from './password-view/password-view.component';
import { HomeService } from './home.service';
import { DialogFormComponent } from './dialog-form/dialog-form.component';


@NgModule({
  declarations: [
    HomeComponent,
    GeneratorComponent,
    PasswordViewComponent,
    DialogFormComponent
  ],
  entryComponents: [
    DialogFormComponent
  ],
  providers: [
    HomeService
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule
  ]
})

export class HomeModule { }