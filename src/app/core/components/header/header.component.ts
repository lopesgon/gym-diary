import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string;
  version: string;

  @Output('toggled') toggled = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sidenavToggle() {
    this.toggled.emit();
  }

}
