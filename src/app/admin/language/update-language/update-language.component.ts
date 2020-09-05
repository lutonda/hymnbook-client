import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from './../../../services/language.service';
import { Language } from './../../../models/language';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-language',
  templateUrl: './update-language.component.html',
  styleUrls: ['./update-language.component.css']
})
export class UpdateLanguageComponent implements OnInit {

  language:Language=new Language()

  constructor(private service: LanguageService,
              private router: ActivatedRoute,
              private fb: FormBuilder   
    ) { }

    form= this.fb.group({
      description:['', Validators.required],
      code:['', Validators.required]
    })

  ngOnInit(): void {

    let id = this.router.snapshot.paramMap.get('id');

    this.service.getOnelanguage(id).subscribe(data => this.language=data.data);

  }

  save(){
    this.service.updatelanguage(this.language).subscribe(data => {let u = data.data});
  }

}
