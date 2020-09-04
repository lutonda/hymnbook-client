import { Part } from './part';
import { Language } from './language';
import { Author } from './author';


export class Hymn {

    _id:string;
    title:string;
    number: number;
    author:Author;
    parts: Array<Part>;
    language: Language;
    
    constructor(title?:string, num?:number){
        this.title=title;
        this.number=num;
    }

    
}
