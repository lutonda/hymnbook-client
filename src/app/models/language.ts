import { Hymn } from './hymn';

export class Language {

  _id: string;
  description: string;
  code: string;

  hymns: Array<Hymn>;

  constructor(description?: string, code?: string) {
    this.description = description;
    this.code = code;
  }
}
