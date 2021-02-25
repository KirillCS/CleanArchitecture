import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './core/components/people/people.component';
import { DetailsComponent } from './core/components/people/details/details.component';
import { AddingComponent } from './core/components/people/adding/adding.component';
import { EditingComponent } from './core/components/people/editing/editing.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    PeopleComponent,
    DetailsComponent,
    AddingComponent,
    EditingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
