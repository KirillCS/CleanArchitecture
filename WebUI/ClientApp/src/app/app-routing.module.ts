import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeopleComponent } from './core/components/people/people.component';
import { AddingComponent } from './core/components/people/adding/adding.component';
import { DetailsComponent } from './core/components/people/details/details.component';
import { EditingComponent } from './core/components/people/editing/editing.component';

const routes: Routes = [
  { path: 'people', component: PeopleComponent, },
  { path: 'people/details', component: DetailsComponent },
  { path: 'people/add', component: AddingComponent },
  { path: 'people/edit', component: EditingComponent },
  { path: '', redirectTo: '/people', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
