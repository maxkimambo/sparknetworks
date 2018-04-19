import { Component, OnInit, Input } from '@angular/core';
import { MatchesService } from '../services/MatchesService';
import { User } from '../services/User';
@Component({
  selector: 'app-card-list',
  templateUrl: './app.card.list.html',
  styleUrls: []

})
export class CardListComponent {

//   users: User[];
  @Input()  users: User[];

};