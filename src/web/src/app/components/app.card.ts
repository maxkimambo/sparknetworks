import { Component, OnInit } from '@angular/core';
import { MatchesService } from '../services/MatchesService';
import { User, IUser } from '../services/User';
@Component({
  selector: 'app-card',
  templateUrl: './app.card.html',
  styleUrls: ['./app.card.css']

})
export class CardComponent implements OnInit {

  users: User[] = [];
  
  constructor(private matchService: MatchesService) {

  }

  ngOnInit() {
    
    this.matchService.getAllUsers().subscribe( data => {
        this.users = data; 
    });

  }

};