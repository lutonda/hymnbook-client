import { Injectable, OnInit } from '@angular/core';

import {SocialUser} from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})

export class AuthenficationService{

  user:SocialUser;
  d={};

  active(){
    return localStorage.length!=0 ? true : false;
  }

  userDesc(){

    let u = '{"name": "'+localStorage.getItem('name')+'", "photoUrl": "' +localStorage.getItem('photoUrl')+'"}';

    return JSON.parse(u);

  }

  sig(data){

    localStorage.setItem('name', data.name);
    localStorage.setItem('photoUrl', data.photoUrl);
    
    return data;
  }

  log(){
    localStorage.clear();
    return false;
  }

}


