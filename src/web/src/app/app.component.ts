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

  constructor(private matchService: MatchesService, private changeDetector: ChangeDetectorRef) {

  }
  ngOnInit(): void {

    this.matchService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  handleFilters($event): void {

    this.matchService.getFilteredUsers($event).subscribe(filteredData => {

      this.users = filteredData;
      this.changeDetector.detectChanges(); // have to call manually to update the images/ 
    })
  }

}
