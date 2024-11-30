import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  person: any = {};
  id: string;

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.peopleService.getPeople().subscribe((people) => {
      this.person = people.find(p => p.id === this.id);
    });
  }

  savePerson() {
    this.peopleService.updatePerson(this.id, this.person).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
