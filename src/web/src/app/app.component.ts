import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatchesService } from './services/MatchesService';
import { User } from './services/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: User[] = [];

  constructor(private matchService: MatchesService) {

  }
  ngOnInit(): void {

    this.matchService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }
  handleClearFilters($event):void{
    // reinitialise the page with original data. 
    this.ngOnInit(); 
  }
  handleFilters($event): void {

    this.matchService.getFilteredUsers($event).subscribe(filteredData => {

      this.users = filteredData;
     
    })
  }

}
