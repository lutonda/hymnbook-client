import { Router } from '@angular/router';
import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';
import { HymnService } from 'app/services/hymn.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home.page',
  templateUrl: './home.component.html',
  styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class HomeComponent implements OnInit, OnDestroy {
  data: Date = new Date();

  page = 4;
  page1 = 5;
  page2 = 3;
  focus;
  focus1;
  focus2;

  date: { year: number, month: number };
  model: NgbDateStruct;

  public isCollapsed = true;
  public isCollapsed1 = true;
  public isCollapsed2 = true;

  state_icon_primary = true;
  keyword = 'title';

  datas = [];

  constructor(private renderer: Renderer2,
    config: NgbAccordionConfig,
    private hymnService: HymnService,
    private router: Router) {
    config.closeOthers = true;
    config.type = 'info';
  }
  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month !== current.month;
  }
  onApplyFilter(item){
    this.router.navigate(['hymns/' + item._id])
  }
  ngOnInit() {
    this.hymnService.getAllHymns().subscribe((d) => {
      this.datas = d.data;
    })

    var rellaxHeader = new Rellax('.rellax-header');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('index-page');
  }
  ngOnDestroy() {
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('index-page');
  }
}
