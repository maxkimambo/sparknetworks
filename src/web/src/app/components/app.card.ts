import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { MatchesService } from '../services/MatchesService';
import { User } from '../services/User';
@Component({
  selector: 'app-card',
  templateUrl: './app.card.html',
  styleUrls: ['./app.card.css']

})
export class CardComponent implements OnInit {


  @Input()  user: User;
  
  ngOnInit() {

  }

};