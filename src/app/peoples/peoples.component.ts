import { Component, OnInit } from '@angular/core';

import { PeopleService } from '../services/peoples.service';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {
  peoples;

  constructor(private peoplesService: PeopleService) { }

  ngOnInit(): void {
    this.peoplesService.searchPeoples().subscribe((res: any) => {
      this.peoples = res.results;
    });
  }

  getById(url: string): void {
    this.peoplesService.searchPeoplesById(url).subscribe(res => {
      console.log(res);
    });
  }
}
