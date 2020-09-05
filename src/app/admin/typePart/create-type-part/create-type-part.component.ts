import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { TypePart } from './../../../models/type-part';
import { TypePartService } from './../../../services/type-part.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-type-part',
  templateUrl: './create-type-part.component.html',
  styleUrls: ['./create-type-part.component.css']
})
export class CreateTypePartComponent implements OnInit {

  typePart: TypePart = new TypePart();

  constructor(private service: TypePartService,
              private fb: FormBuilder,
              private toast: ToastrService,
              private router: Router
              ) { }

  form = this.fb.group({
    description: ['', Validators.required]
  });

  ngOnInit(): void {}

  save() {
    this.service.create(this.typePart).subscribe(data => {
      
      if (data.status === 200) {
        this.toast.success('Success', "It's done!");
        this.router.navigate(['/admin/type-parts']);
      }
      else
        this.toast.error('Erro', 'Something was wrong!');
    
    });
  }
}
