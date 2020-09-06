import { Part } from './part';
import { Language } from './language';
import { Author } from './author';


export class Hymn {

  _id: string;
  title: string;
  number: number;
  author: Author;//new Author();
  parts: Array<Part> = [];
  language: Language = new Language();
  files: Array<any> = [];
  constructor(title?: string, num?: number) {
    this.title = title;
    this.number = num;
  }


}
