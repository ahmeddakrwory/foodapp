import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { CitycComponent } from './cityc/cityc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule}from '@angular/material/button';
import { DeletecityComponent } from './deletecity/deletecity.component';
import { AddcityComponent } from './addcity/addcity.component';
import { CityfilterPipe } from './cityfilter.pipe';
import { EditcityComponent } from './editcity/editcity.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CityAreaComponent } from './city-area/city-area.component';
import { AddAreaComponent } from './add-area/add-area.component';
import { AddneAreaComponent } from './addne-area/addne-area.component';
@NgModule({
  declarations: [
    AppComponent,
    CitycComponent,
    DeletecityComponent,
    AddcityComponent,
    CityfilterPipe,
    EditcityComponent,
    CityAreaComponent,
    AddAreaComponent,
    AddneAreaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
