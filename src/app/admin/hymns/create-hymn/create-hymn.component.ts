

import { NgForm, FormArray, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { HymnService } from './../../../services/hymn.service';
import { TypePartService } from './../../../services/type-part.service';
import { LanguageService } from './../../../services/language.service';

import { Part } from 'app/models/part';
import { TypePart } from './../../../models/type-part';
import { Language } from './../../../models/language';
import { Hymn } from './../../../models/hymn';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-create-hymn',

  templateUrl: './create-hymn.component.html',
  styleUrls: ['./create-hymn.component.css']
})
export class CreateHymnComponent implements OnInit {

  hymn: Hymn = new Hymn();
  languages: Array<Language> = [];
  typeParts: Array<TypePart> = [];

  title = "Create Hymn"

  constructor(
    private hymnService: HymnService,
    private languagesService: LanguageService,
    private typePartService: TypePartService,
    private fb: FormBuilder,
    private toastr: ToastrService) { }

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
    this.hymnService.create(this.hymn).subscribe(data => {
      if (data.status == 200)
        this.toastr.success('Success', "It's done!");
      else
        this.toastr.error('Erro', 'Something was wrong!');
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
