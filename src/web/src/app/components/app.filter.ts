import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatchesService } from '../services/MatchesService';


@Component({
  selector: 'app-filter',
  templateUrl: './app.filter.html',
  styleUrls: ['./app.filter.css']

})
export class FilterComponent implements OnInit {

  constructor(private matchService: MatchesService) {
  }
  @Output() filterResultsEvent = new EventEmitter();
  @Output() clearFilterResultEvent = new EventEmitter(); 

  heightValues = [];
  ageValues = [];
  compatibilityValues = [];
  vm: any

  onClear(){
    this.clearFilterResultEvent.emit(); 
  }
  onSubmit() {

    this.filterResultsEvent.emit(this.vm);

  }
  ngOnInit(): void {

    for (let i = 135; i < 211; i++) {
      this.heightValues.push(i);
    }

    for (let a = 18; a < 96; a++) {
      this.ageValues.push(a);
    }
    for (let c = 1; c < 100; c++) {
      this.compatibilityValues.push(c);
    }
    // setting sensible defaults
    this.vm = {};
    this.vm.photo = false;
    this.vm.contact = false;
    this.vm.favourites = false;
    this.vm.startAge = 18;
    this.vm.endAge = 95;
    this.vm.startHeight = 135;
    this.vm.endHeight = 210;
    this.vm.distance = 300;
    this.vm.startCompatibility = 1;
    this.vm.endCompatibility = 99;
  }
};
