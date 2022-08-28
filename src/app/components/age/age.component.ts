import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {
  age:any;
  showAge:any;
  viewAge=false;

  constructor() { }

  ngOnInit(): void {
  }
  ageCalculator(){
    if(this.age){
      const convertAge = new Date(this.age);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
      this.viewAge=true;
    }
  }
  resetAge(){
    this.viewAge=false;
  }

}
