import { LanguageService } from './../../../services/language.service';
import { Language } from './../../../models/language';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-create-language',
  templateUrl: './create-language.component.html',
  styleUrls: ['./create-language.component.css']
})

export class CreateLanguageComponent implements OnInit {

  language:Language=new Language(); 

  constructor(private service: LanguageService, 
              private route:ActivatedRoute, 
              private fb:FormBuilder
            ) { }

  form= this.fb.group({
        code: ['', Validators.required],
        description: ['', Validators.required]

  });

  ngOnInit(): void {
  }

  save(){
    this.service.createlanguage(this.language).subscribe(data => console.log(data));
  }

}
