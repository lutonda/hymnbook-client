import { TypePartService } from './../../../../services/type-part.service';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-type-parts',
  templateUrl: './list-type-parts.component.html',
  styleUrls: ['./list-type-parts.component.css']
})
export class ListTypePartsComponent implements OnInit {

  @Input() _id = new EventEmitter();

  typeParts: Array<any>=[];

  constructor( private typePart: TypePartService) {
  }

 
  ngOnInit(): void {

    this.typePart.getAllTypePart().subscribe(data=>this.typeParts=data.data);
  }

}
