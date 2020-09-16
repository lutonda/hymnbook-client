import { Hymn } from './hymn';


export class Author {

  _id: string;
  name: string;
  description: string;
  hymns: Array<Hymn>;

  constructor(name?: string, description?: string) {
    this.name = name;
    this.description = description;
  }
}
