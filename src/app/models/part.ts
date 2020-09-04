import { TypePart } from './type-part';


export class Part {

    _id: string;
    order: number;
    text: string;

    typePart: TypePart;

    constructor(order?: number, text?: string) {
        this.order = order;
        this.text = text;
    }


}
