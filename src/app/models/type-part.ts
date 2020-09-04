import { Part } from './part';


export class TypePart {

    _id: string;
    description: string;

    parts: Array<Part>;

    constructor(desc?: string) {
        this.description = desc;
    }
}
