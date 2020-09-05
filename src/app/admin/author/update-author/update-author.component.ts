import { ToastrService } from 'ngx-toastr';
import { Author } from './../../../models/author';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from './../../../services/author.service';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';


let id = '';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})

export class UpdateAuthorComponent implements OnInit {

  author: Author = new Author();

  constructor(private service: AuthorService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) { }

  form = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required]

  });

  ngOnInit(): void {
    id = this.route.snapshot.paramMap.get('id');

    this.service.getOneAuthor(id).subscribe(data => { this.author = data.data; });
  }

  save() {
    console.log(this.author._id);
    this.service.updateAuthor(this.author).subscribe(data => {
      if (data.status === 200) {
        this.toastr.success('Success', "It's done!");
        this.router.navigate(['/admin/authors']);
      }
      else
        this.toastr.error('Erro', 'Something was wrong!');
    });
  };
}
