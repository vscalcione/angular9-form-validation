import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  collapsed = true; 
  
  constructor() { }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

}
