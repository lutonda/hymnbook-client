import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-form-parts',
  templateUrl: './form-parts.component.html',
  styleUrls: ['./form-parts.component.css']
})
export class FormPartsComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  @Output('newHobby') addHobby: EventEmitter<any> = new EventEmitter();

  form = this.fb.group({
    name: ['', Validators.required],
    frequency: ['', Validators.required]
  });

  submit() {
    this.addHobby.emit(this.form.value);
    this.form.reset();
  }
  ngOnInit(): void {
  }

}
