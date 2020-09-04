import { TypePartService } from './../../../services/type-part.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-type-part',
  templateUrl: './create-type-part.component.html',
  styleUrls: ['./create-type-part.component.css']
})
export class CreateTypePartComponent implements OnInit {

  data:string;

  constructor(private service: TypePartService) { }

  ngOnInit(): void {
    
  }

  save() {
    this.service.create(this.data).subscribe(data=>{
      let u=data;
    });
  }


}
