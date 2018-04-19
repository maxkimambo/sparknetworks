import { Component, OnInit, Input } from '@angular/core';
import { MatchesService } from '../services/MatchesService';
import { User } from '../services/User';
@Component({
  selector: 'app-card',
  templateUrl: './app.card.html',
  styleUrls: ['./app.card.css']

})
export class CardComponent implements OnInit {

  @Input()  users: User[];

  constructor(private matchService: MatchesService) {

  }

  ngOnInit() {

  }

};