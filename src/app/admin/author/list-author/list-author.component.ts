import { Author } from './../../../models/author';
import { AuthorService } from './../../../services/author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-author',
  templateUrl: './list-author.component.html',
  styleUrls: ['./list-author.component.css']
})
export class ListAuthorComponent implements OnInit {

  authors: Array<any>=[];

  constructor(private author: AuthorService) { }

  ngOnInit(): void {
    this.author.getAllAthors().subscribe(data => {this.authors = data.data;})

  }

}
