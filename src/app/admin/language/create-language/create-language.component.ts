import { ToastrService } from 'ngx-toastr';
import { LanguageService } from './../../../services/language.service';
import { Language } from './../../../models/language';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
              private toast:ToastrService, 
              private router:Router, 
              private fb:FormBuilder
            ) { }

  form= this.fb.group({
        code: ['', Validators.required],
        description: ['', Validators.required]

  });

  ngOnInit(): void {
  }

  save(){
    this.service.createlanguage(this.language).subscribe(data=>

      {if(data.status === 200) {
        this.toast.success('Success', "It's done!");
        this.router.navigate(['/admin/languages']);
      }
      else
        this.toast.error('Erro', 'Something was wrong!');

    
    });
  }

}
