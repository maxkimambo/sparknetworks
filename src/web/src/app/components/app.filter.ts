import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './app.filter.html',
  styleUrls: ['./app.filter.css']

})
export class FilterComponent implements OnInit {

  heightValues = [];
  ageValues = [];
  vm: any
 
  onSubmit(){
    // send the data to the api
    console.log(this.vm);
  }
  ngOnInit(): void {

    for (let i = 135; i < 211; i++) {
      this.heightValues.push(i);
    }

    for (let a = 18; a < 96; a++) {
      this.ageValues.push(a);
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
    this.vm.distance = 30;
  }


};
