import { Component, OnInit } from '@angular/core';
import { menu, menus } from '../../../model/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  cards: menu[] = menus;

  ngOnInit(): void {
    this.getCardList();
  }

  public getCardList(){
  }
}
