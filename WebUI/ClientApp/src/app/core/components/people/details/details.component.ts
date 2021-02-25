import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Person } from 'src/app/core/models/person';
import { PeopleService } from 'src/app/core/services/people.service';
import { SexToString } from 'src/app/shared/enumsDictionaries/sexToString';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input()
  public person: Person = new Person();
  public sexToString = SexToString;

  constructor(private route: ActivatedRoute, private peopleService: PeopleService, private location: Location) { }

  ngOnInit(): void {
    this.refresh();
  }

  public goBack(): void {
    this.location.back();
  }

  private refresh(): void {
    this.route.paramMap.subscribe(params => {
      this.peopleService.get(parseInt(params.get('personId'))).subscribe(person => this.person = person);
    })
  }
}
