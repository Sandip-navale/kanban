import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { TaskComponent } from './task/task.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskcreateComponent } from './taskcreate/taskcreate.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    TaskComponent,
    TaskcreateComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    DragDropModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatExpansionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
