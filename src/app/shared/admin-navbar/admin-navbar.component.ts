import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  @Input() title;
  @Input() minTitle;

  @Input() identity;
  constructor() { }

  ngOnInit(): void {
  }

}
