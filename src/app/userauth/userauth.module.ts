import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { BoxComponent } from './box/box.component';
@NgModule({
  declarations: [HomeComponent, BoxComponent],
  imports: [CommonModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  exports: [HomeComponent, BoxComponent],
})
export class UserauthModule {}
