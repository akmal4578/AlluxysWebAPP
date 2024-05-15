import { Component, OnInit } from '@angular/core';
import { menu, menus } from '../../../model/menu';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  items: menu[] = menus;

  ngOnInit(): void {
  }

}
