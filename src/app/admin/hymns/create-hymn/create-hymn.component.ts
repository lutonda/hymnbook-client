import { TypePart } from './../../../models/type-part';
import { Language } from './../../../models/language';
import { Hymn } from './../../../models/hymn';

import { TypePartService } from './../../../services/type-part.service';
import { LanguageService } from './../../../services/language.service';

import { NgForm, FormArray, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { HymnService } from './../../../services/hymn.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Part } from 'app/models/part';

@Component({
  selector: 'app-create-hymn',

  templateUrl: './create-hymn.component.html',
  styleUrls: ['./create-hymn.component.css']
})
export class CreateHymnComponent implements OnInit {

  hymn: Hymn = new Hymn();
  languages: Array<Language> = [];
  typeParts: Array<TypePart> = [];
  title="Create Hymn"

  constructor(
    private hymnService: HymnService,
    private languagesService: LanguageService,
    private typePartService: TypePartService,
    private fb: FormBuilder) { }

  @Output('newSubForm') submitFormObjectToParent: EventEmitter<any> = new EventEmitter();


  form = this.fb.group({
    title: ['', Validators.required],
    number: [null, [Validators.required, Validators.min(1)]],
    language: [''],
    parts: this.fb.array([], this.minFormArrayLength(2))
  });

  ngOnInit(): void {
    this.languagesService.getAlllanguages().subscribe(data => this.languages = data.data)
    this.typePartService.getAllTypePart().subscribe(data => this.typeParts = data.data)
  }
  save() {
    alert(JSON.stringify(this.hymn))
    this.hymnService.create(this.hymn).subscribe(data=>{
      let u=data;
    });
  }

  addPart() {
    this.hymn.parts.push(new Part())
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1._id === c2._id : c1 === c2;
  }

  minFormArrayLength(min: number) {
    return (c: AbstractControl): { [key: string]: any } => {
      if (c.value.length >= min) return null;
      return { 'minLengthArray': { valid: false } };
    }
  }

}
