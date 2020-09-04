import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-form-hymn',
  templateUrl: './form-hymn.component.html',
  styleUrls: ['./form-hymn.component.css']
})
export class FormHymnComponent implements OnInit {

  @Output() submit=new EventEmitter();
  @Input() hymn:any={parts:[]};

  form = this.fb.group({
    title: ['', Validators.required],
    number: [null, [Validators.required, Validators.min(1)]],
    language: [''],
    parts: this.fb.array(this.hymn.parts, this.minFormArrayLength(2))
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit():void {
    
   }
  save(){
    this.submit.emit(this.hymn)
  }

  addPart() {
    this.hymn.parts.push({ text: '', typePart: {} })
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
