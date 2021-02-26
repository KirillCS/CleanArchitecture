import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Person } from 'src/app/core/models/person';
import { Sex } from 'src/app/core/enums/sex';
import { PeopleService } from 'src/app/core/services/people.service';
import { AddingEditing } from './adding-editing';

@Component({
  selector: 'app-adding',
  templateUrl: './adding-editing.component.html',
})
export class AddingComponent implements OnInit, AddingEditing {
  @Input()
  public title: string = 'Creating new person';
  public submitButtonName: string = 'Add';
  public person: Person = new Person();
  public sex: typeof Sex = Sex;

  public constructor(private location: Location, private peopleService: PeopleService) { }

  public ngOnInit(): void {
  }

  public submitHandler(isValid: boolean): void {
    if (isValid) {
      this.addPerson();
      this.goBack();
    }
  }

  public goBack(): void {
    this.location.back();
  }

  private addPerson(): void {
    this.peopleService.addPerson(this.person).subscribe();
  }
}
