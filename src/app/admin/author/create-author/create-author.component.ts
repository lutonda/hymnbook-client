import { Author } from './../../../models/author';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from './../../../services/author.service';
import { Component, OnInit } from '@angular/core';


let id='';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})

export class CreateAuthorComponent implements OnInit {

  author:Author=new Author(); 

  constructor(private service: AuthorService, 
              private route:ActivatedRoute, 
              private fb:FormBuilder
            ) { }

  form= this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required]

  });

  ngOnInit(): void {
  }

  save(){
    this.service.create(this.author).subscribe(data => console.log(data));
  }

}
