import { Author } from './../../../models/author';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from './../../../services/author.service';
import { Component, OnInit } from '@angular/core';


let id='';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})

export class UpdateAuthorComponent implements OnInit {

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
      id = this.route.snapshot.paramMap.get('id');
      
      this.service.getOneAuthor(id).subscribe(data=>{this.author=data.data;});
  }

  save(){
    console.log(this.author._id);
    this.service.updateAuthor(this.author).subscribe(data => console.log(data));
  }

}
