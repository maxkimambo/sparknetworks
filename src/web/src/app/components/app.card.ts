import { Component, OnInit } from '@angular/core';
import {MatchesService} from '../services/MatchesService'; 
import {User} from '../services/User'; 
@Component({
  selector: 'app-card',
  templateUrl: './app.card.html',
  styleUrls: ['./app.card.css']

})
export class CardComponent implements OnInit{
  
  users: User[]; 

  constructor(){
   
  }
 
  ngOnInit() {
    let matchService = new MatchesService(); 
    this.users = matchService.getUsers();
    console.log(this.users);
  }

};