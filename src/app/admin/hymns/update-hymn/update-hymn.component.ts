import { TypePartService } from './../../../services/type-part.service';
import { LanguageService } from './../../../services/language.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm, FormArray, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { HymnService } from './../../../services/hymn.service';
import { Component, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-update-hymn',
  templateUrl: './update-hymn.component.html',
  styleUrls: ['./update-hymn.component.css']
})
export class UpdateHymnComponent implements OnInit {

  hymn: any = {};
  languages: Array<any> = [];
  typeParts: Array<any> = [];
  constructor(
    private hymnService: HymnService,
    private languagesService: LanguageService,
    private typePartService:TypePartService,
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
    this.hymnService.getOneHymn(id).subscribe(data => {
      this.hymn = data.data
     // this.form.value = data.data
    }
    )
    this.languagesService.getAlllanguages().subscribe(data => {
      this.languages = data.data
    })
    this.typePartService.getAllTypePart().subscribe(data=>this.typeParts=data.data)
  }
  onSubmit(f: NgForm) {
    console.log(f.value);  // {name: {first: 'Nancy', last: 'Drew'}, email: ''}
    console.log(f.valid);  // true
  }


  //-------------------

  submit() {
    let u = 0;
    let value = this.form.value;

    /* this.submitFormObjectToParent.emit(this.form.value);
     this.emptyHobbies();
     this.form.reset();*/
  }

  addNewHobby(hobby: any) {
    const control = this.form.get('hobbies') as FormArray;
    control.push(this.fb.group(hobby));
  }
  addPart(){
    this.hymn.parts.push({text:'',typePart:{}})
  }
  minFormArrayLength(min: number) {
    return (c: AbstractControl): { [key: string]: any } => {
      if (c.value.length >= min) return null;
      return { 'minLengthArray': { valid: false } };
    }
  }

}
