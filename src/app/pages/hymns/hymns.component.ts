import { Hymn } from './../../models/hymn';
import { Part } from './../../models/part';
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
  order = 1;
  // Material Style Basic Audio Player Title and Audio URL
  msbapTitle = 'Audio Title';
  msbapAudioUrl = null;

  msbapDisplayTitle = false;
  msbapDisplayVolumeControls = true;
  constructor(private service: HymnService, private route: ActivatedRoute) { }
  onApplyFilter(item) {
    this.service.getOneHymn(item._id).subscribe(data => {
      this.hymn = data.data;
      this.msbapAudioUrl = `http://${this.service.serverAddress()}/api/v1/files/${this.hymn.files[0].identity}`;
    })
  }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id');
    this.service.getOneHymn(id).subscribe(data => {
      this.hymn = data.data

      this.hymn.parts.forEach((part: Part)=>part.order=part.typePart.description=='Estrofe' ? this.order++ : 0)
      this.msbapAudioUrl = `http://${this.service.serverAddress()}/api/v1/files/${this.hymn.files[0].identity}`;
    })
  }


}
