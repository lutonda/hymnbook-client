

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
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-create-hymn',

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
    parts: this.fb.array([])
  });

  ngOnInit(): void {
    this.addPart()
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
    if (this.hymn.parts.length === 0 || this.hymn.parts[this.hymn.parts.length - 1].text)
      this.hymn.parts.push(new Part())
  }

  removePart(index) {
    if (this.hymn.parts.length === 1){
      this.toastr.warning('We need at lest one Music part', 'warning');
      return;
    }

    this.hymn.parts.splice(index, 1);
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1._id === c2._id : c1 === c2;
  }
}
