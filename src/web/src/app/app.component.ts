import { Component, OnInit } from '@angular/core';
import { MatchesService } from './services/MatchesService';
import { User } from './services/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  vm :any = {};
  users: User[] = [];
  constructor(private matchService:MatchesService){

  }
  ngOnInit(): void {
    this.matchService.getAllUsers().subscribe( data => {
      this.users = data; 
      this.vm.users = this.users; 
  });
  }
}
