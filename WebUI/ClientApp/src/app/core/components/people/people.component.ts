import { Component, OnInit } from '@angular/core';

import { PeopleService } from 'src/app/core/services/people.service';
import { Person } from '../../models/person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  public people: Person[] = [];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getAll().subscribe((data: Person[]) => {
        this.people = data;
    })
  }
}
