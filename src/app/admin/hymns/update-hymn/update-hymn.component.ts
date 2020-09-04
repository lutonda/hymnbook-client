
import { TypePartService } from './../../../services/type-part.service';
import { LanguageService } from './../../../services/language.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm, FormArray, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { HymnService } from './../../../services/hymn.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-update-hymn',
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
  templateUrl: './update-hymn.component.html',
  styleUrls: ['./update-hymn.component.css']
})
export class UpdateHymnComponent implements OnInit {

  hymn: any = {};
  parts_text: Array<string> = [];
  parts_type: Array<string> = [];
  languages: Array<any> = [];
  typeParts: Array<any> = [];
  constructor(
    private hymnService: HymnService,
    private languagesService: LanguageService,
    private typePartService: TypePartService,
    private route: ActivatedRoute,
    private fb: FormBuilder) { }

  @Output('newSubForm') submitFormObjectToParent: EventEmitter<any> = new EventEmitter();


  form = this.fb.group({
    title: ['', Validators.required],
    number: [null, [Validators.required, Validators.min(1)]],
    language: [''],
    parts: this.fb.array([], this.minFormArrayLength(2))
  });

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.hymnService.getOneHymn(id).subscribe(data => this.hymn = data.data)
    this.languagesService.getAlllanguages().subscribe(data => {
      this.languages = data.data
    })
    this.typePartService.getAllTypePart().subscribe(data => this.typeParts = data.data)
  }
  save() {
    this.hymnService.update(this.hymn).subscribe(data => {
      let u = data;
    });
  }

  addPart() {
    if (this.hymn.parts[this.hymn.parts.length - 1].text)
      this.hymn.parts.push({ text: '', typePart: {} })
  }
  removePart(index) {
    if (!this.hymn.parts.length) return;
    this.hymn.parts.splice(index, 1);
  }
  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1._id === c2._id : c1 === c2;
  }
  //-------------------

  submit() {
    let u = 0;
    let value = this.form.value;

    /* this.submitFormObjectToParent.emit(this.form.value);
     this.emptyHobbies();
     this.form.reset();*/
  }

  minFormArrayLength(min: number) {
    return (c: AbstractControl): { [key: string]: any } => {
      if (c.value.length >= min) return null;
      return { 'minLengthArray': { valid: false } };
    }
  }

}
