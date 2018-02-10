import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  cards;
  
  constructor() { }

  ngOnInit() {
    this.cards = [1,2,3,4, 5, 6];

  }

}
