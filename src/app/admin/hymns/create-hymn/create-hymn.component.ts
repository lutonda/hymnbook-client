
import { TypePartService } from './../../../services/type-part.service';
import { LanguageService } from './../../../services/language.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm, FormArray, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { HymnService } from './../../../services/hymn.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-hymn',
  templateUrl: './create-hymn.component.html',
  styleUrls: ['./create-hymn.component.css']
})
export class CreateHymnComponent implements OnInit {

  hymn: any = {parts:[{typePart:{}}]};
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
   /* let id = this.route.snapshot.paramMap.get('id');
    this.hymnService.getOneHymn(id).subscribe(data => this.hymn = data.data)*/
    this.languagesService.getAlllanguages().subscribe(data => {
      this.languages = data.data
    })
    this.typePartService.getAllTypePart().subscribe(data => this.typeParts = data.data)
  }
  save() {
    alert(JSON.stringify(this.hymn))
    /*this.hymnService.create(this.hymn).subscribe(data=>{
      let u=data;
    });*/
  }

  addPart() {
    this.hymn.parts.push({ text: '', typePart: {} })
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1._id === c2._id : c1 === c2;
  }
  //-------------------

  submit() {
  }

  minFormArrayLength(min: number) {
    return (c: AbstractControl): { [key: string]: any } => {
      if (c.value.length >= min) return null;
      return { 'minLengthArray': { valid: false } };
    }
  }

}
