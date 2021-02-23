import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './core/components/people/people.component';
import { DetailsComponent } from './core/components/people/details/details.component';
import { AddingComponent } from './core/components/people/adding/adding.component';
import { EditingComponent } from './core/components/people/editing/editing.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    DetailsComponent,
    AddingComponent,
    EditingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
