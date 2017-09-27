import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';

import { ImageService} from './shared/image.service';
import { MasonryModule} from 'angular2-masonry';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{MatProgressBarModule,MatToolbarModule,MatRadioModule,MatInputModule,MdInput,MatCardModule,MdTooltipModule,MdIconModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent
  ],
  imports: [
 MatProgressBarModule,
    BrowserModule,
    HttpModule,
    FormsModule,
   
    MasonryModule,
    MatRadioModule,
    MatInputModule,

    MatToolbarModule,
   
    MatCardModule,
    MdTooltipModule,
    MdIconModule,
    BrowserAnimationsModule,
  
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
