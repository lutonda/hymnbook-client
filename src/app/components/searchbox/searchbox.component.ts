import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HymnService } from 'app/services/hymn.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {

  datas: Array<any> = [];

  constructor(private hymnService: HymnService, private router: Router) { }

  @Output() searchData = new EventEmitter();

  filterValue: any = {}

  ngOnInit(): void {
    this.hymnService.getAllHymns().subscribe(d => {
      this.datas = d.data;
    });
  }

  typeahead: string;
  suggestions: Array<any> = [];

  filter(item) {
    this.typeahead = '';
    this.suggestions = [];
    this.searchData.emit(item)
  }

  selectEvent(item: any) {
    this.searchData = item;
  }

  suggest() {
    this.suggestions = this.datas.filter(c => {
      let final = c.number == this.typeahead || this.typeahead.length > 2 && c.title.toUpperCase().includes(this.typeahead.toUpperCase())
      return final;
    }).slice(0, 10);

  }

}
