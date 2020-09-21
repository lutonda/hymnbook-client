export class User {

    id: string;
    name: string;
    photoUrl: string;

    constructor(name?: string, photoUrl?:string) {
      this.name=name;
      this.photoUrl=photoUrl;
    }
  }
  