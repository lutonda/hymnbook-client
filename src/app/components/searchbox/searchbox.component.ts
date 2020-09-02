import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HymnService } from 'app/services/hymn.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {

  datas:Array<any>=[];

  constructor(private hymnService: HymnService, private router: Router) { }

  ngOnInit(): void {
    this.hymnService.getAllHymns().subscribe((d)=>{
        this.datas=d.data;
    });
  }

  typeahead:string;
  suggestions: Array<any>=[];

  suggest(){
    this.suggestions = this.datas.filter(c => {
      let final = c.number==this.typeahead || this.typeahead.length>2 && c.title.includes(this.typeahead[0].toUpperCase()+this.typeahead.substring(1).toLowerCase())
      return final;
    }).slice(0, 10);

  }
  
}
