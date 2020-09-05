import { LanguageService } from './../../../services/language.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-languages',
  templateUrl: './list-languages.component.html',
  styleUrls: ['./list-languages.component.css']
})
export class ListLanguagesComponent implements OnInit {

  languages:Array<any>;

  constructor(private service: LanguageService) { }

  ngOnInit(): void {
    this.service.getAlllanguages().subscribe(data=>this.languages=data.data);
  }

}
