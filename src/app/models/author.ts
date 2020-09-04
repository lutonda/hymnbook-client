import { Hymn } from './hymn';


export class Author {
    
    _id: string;
    nome:string;
    description:string;
    hymns:Array<Hymn>;

    constructor(nome?:string, desc?:string){
        this.nome=nome;
        this.description=desc;
    }
}
