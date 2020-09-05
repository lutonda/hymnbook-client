import { ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { TypePart } from './../../../models/type-part';
import { TypePartService } from './../../../services/type-part.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-type-part',
  templateUrl: './update-type-part.component.html',
  styleUrls: ['./update-type-part.component.css']
})
export class UpdateTypePartComponent implements OnInit {

  typePart: TypePart = new TypePart();

  constructor(
    private service: TypePartService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  form = this.fb.group({
    description: ['', Validators.required]
  });

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.getOneTypePart(id).subscribe(data => this.typePart = data.data);
  }

  save() {
    this.service.update(this.typePart).subscribe(data => {
      let u = data;
    });
  }
}
