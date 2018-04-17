import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './app.filter.html',
  styleUrls:['./app.filter.css']

})
export class FilterComponent implements OnInit {

  heightValues = []; 
  ageValues = []; 
  
  ngOnInit(): void {

      for(let i = 135; i<211; i++){
        this.heightValues.push(i);
      }

      for(let a = 18; a<96; a++){
        this.ageValues.push(a);
      }


  }
 
  
};
