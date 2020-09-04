import { Hymn } from './hymn';

export class Language {

    _id:string;
    description:string;
    code:string;

    hymns:Array<Hymn>;

    constructor(desc?:string, code?:string){
        this.description=desc;
        this.code=code;
    }
}
