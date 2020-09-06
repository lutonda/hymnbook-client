import { Hymn } from './../../models/hymn';
import { HymnService } from 'app/services/hymn.service';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-hymns',

  animations: [
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ]), transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1, height: '*' }),
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({
            transform: 'scale(0.5)', opacity: 0,
            height: '0px', margin: '0px'
          }))
      ])
    ],
    )
  ],
  templateUrl: './hymns.component.html',
  styleUrls: ['./hymns.component.css']
})

export class HymnsComponent implements OnInit {
  @Input() searchData = new EventEmitter();
  hymn = new Hymn();
  order = 0;
  incress() {
    this.order++;
  }
  // Material Style Basic Audio Player Title and Audio URL
  msbapTitle = 'Audio Title';
  msbapAudioUrl = 'https://doc-14-a4-docs.googleusercontent.com/docs/securesc/2qlrtbj35evetsbk7qsstebeh85tfvt4/sq5qsb31qd3oubnls2up7sdb02stj743/1599430575000/06750515141549952095/06750515141549952095/18sdv---_b07XQ6MIgdgO204IhSSj9Uoc?e=download&authuser=0';

  msbapDisplayTitle = false;
  msbapDisplayVolumeControls = true;
  constructor(private service: HymnService, private route: ActivatedRoute) { }
  onApplyFilter(item) {
    this.service.getOneHymn(item._id).subscribe(data => {
      this.hymn = data.data
    })
  }

  

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id');
    this.service.getOneHymn(id).subscribe(data => {
      this.hymn = data.data
    })
  }


}
