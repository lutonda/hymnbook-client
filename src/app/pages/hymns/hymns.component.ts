import { HymnService } from 'app/services/hymn.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hymns',
  templateUrl: './hymns.component.html',
  styleUrls: ['./hymns.component.css']
})

export class HymnsComponent implements OnInit {
  hymn={title:'...',parts:[]};
  order=0;
  incress(){
    this.order++;
  }
  constructor(private service: HymnService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    let id=this.route.snapshot.paramMap.get('id');
    this.service.getOneHymn(id).subscribe(data=>{
      this.hymn=data.data
    })
  }


}
