import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PeopleService } from 'src/app/core/services/people.service';
import { AddingEditing } from './adding-editing';
import { Sex } from 'src/app/core/enums/sex';
import { Person } from 'src/app/core/models/person';

@Component({
  selector: 'app-editing',
  templateUrl: './adding-editing.component.html',
})
export class EditingComponent implements OnInit, AddingEditing {
  public title: string = 'Editing person data';
  public submitButtonName: string = 'Save';
  public sex: typeof Sex = Sex;
  public person: Person = new Person();

  public constructor(private route: ActivatedRoute,
    private peopleService: PeopleService,
    private location: Location) { }

  public ngOnInit(): void {
    this.refresh();
  }

  public submitHandler(isValid: boolean): void {
    if (isValid) {
      this.save();
      this.goBack();
    }
  }

  public goBack(): void {
    this.location.back();
  }

  private refresh(): void {
    this.route.paramMap.subscribe(params => {
      this.peopleService.get(parseInt(params.get('personId'))).subscribe(person => this.person = person);
    })
  }

  private save(): void {
    this.peopleService.updatePerson(this.person).subscribe();
  }
}
