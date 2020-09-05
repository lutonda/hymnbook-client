import { Hymn } from './../../models/hymn';
import { HymnService } from 'app/services/hymn.service';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hymns',
  templateUrl: './hymns.component.html',
  styleUrls: ['./hymns.component.css']
})

export class HymnsComponent implements OnInit {

  @Input() searchData=new EventEmitter();

  hymn= new Hymn();
  order=0;

  incress(){
    this.order++;
  }

  constructor(private service: HymnService, private route:ActivatedRoute) { }

  onApplyFilter(item){
    this.service.getOneHymn(item._id).subscribe(data=>{
      this.hymn=data.data
    })
    //alert(event._id)
  }

  ngOnInit(): void {

    let id=this.route.snapshot.paramMap.get('id');
    this.service.getOneHymn(id).subscribe(data=>{
      this.hymn=data.data
    })
  }


}
