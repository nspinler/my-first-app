import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ch2-assignment3',
  templateUrl: './ch2-assignment3.component.html',
  styleUrls: ['./ch2-assignment3.component.css']
})
export class Ch2Assignment3Component implements OnInit {

  display: boolean = false;
  buttonClicks: Array<Date> = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDisplay() {
    this.display = !this.display;
    //this.buttonClicks.push(this.buttonClicks.length + '');
    this.buttonClicks.push(new Date());
  }

}
