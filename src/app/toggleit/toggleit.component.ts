import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggleit',
  templateUrl: './toggleit.component.html',
  styleUrls: ['./toggleit.component.css']
})
export class ToggleitComponent implements OnInit {

  paragraphVisible = true;
  counter = 0;
  logArray = [];

  constructor() { }

  ngOnInit() {
  }

  toggleParagraph(){   
    this.counter++; 
    this.logArray.push(this.counter);
    this.paragraphVisible = (this.paragraphVisible === true) ? false : true;
  }

  getBackgroundColor(){
    return {
      backgroundColor: this.counter > 4 ? 'blue' : 'white'
    }; 
  }

  getColor(){
    return this.counter;
  }

}
