import { Component, OnInit } from '@angular/core';

import { PeopleService } from 'src/app/core/services/people.service';
import { Person } from 'src/app/core/models/person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  public people: Person[] = [];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.refreshPeople();
  }

  public deleteButtonClickHandler(personId: number): void {
    this.deletePerson(personId);
  }

  private deletePerson(personId: number): void {
    this.peopleService.deletePerson(personId).subscribe(() => this.refreshPeople());
  }

  private refreshPeople(): void {
    this.peopleService.getAll().subscribe((data: Person[]) => {
      this.people = data;
    })
  }
}
