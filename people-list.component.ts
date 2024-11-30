import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: any[] = [];

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.peopleService.getPeople().subscribe((data) => {
      this.people = data;
    });
  }

  deletePerson(id: string) {
    this.peopleService.deletePerson(id).subscribe(() => {
      this.people = this.people.filter(person => person.id !== id);
    });
  }
}
