import { TypePart } from './type-part';


export class Part {

  _id: string;
  order: number;
  text: string;
  typePart: TypePart = new TypePart();

  constructor(order?: number, text?: string) {
    this.order = order;
    this.text = text;
  }


}
