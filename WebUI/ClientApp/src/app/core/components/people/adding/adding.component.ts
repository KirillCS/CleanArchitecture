import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Person } from 'src/app/core/models/person';
import { Sex } from 'src/app/core/enums/sex';
import { PeopleService } from 'src/app/core/services/people.service';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit {
  @Input()
  public person: Person
  public sex = Sex;

  constructor(private location: Location, private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.person = new Person();
  }

  public goBack(): void {
    this.location.back();
  }

  public submitHandler(isValid: boolean): void {
    if (isValid) {
      this.addPerson();
    }
  }

  private addPerson(): void {
    this.peopleService.addPerson(this.person).subscribe();
    this.goBack();
  }
}
