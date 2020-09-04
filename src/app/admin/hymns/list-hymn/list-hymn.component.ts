import { HymnService } from './../../../services/hymn.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-hymn',
  templateUrl: './list-hymn.component.html',
  styleUrls: ['./list-hymn.component.css']
})
export class ListHymnComponent implements OnInit {

  hymns:Array<any>=[];
  
  constructor(private service:HymnService) { }

  ngOnInit(): void {
    this.service.getAllHymns().subscribe(data=>this.hymns=data.data.sort((x,y)=>x.number>y.number?1:-1))
  }

}
