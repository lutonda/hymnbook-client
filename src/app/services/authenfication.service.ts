
import { UserService } from './user.service';
import { User } from '../models/user';
import { Injectable, OnInit } from '@angular/core';

import { SocialAuthService } from 'angularx-social-login';

const authDataString="authData";
@Injectable({
  providedIn: 'root'
})
export class AuthenficationService {


  active():Boolean {
    return localStorage.getItem(authDataString)!==null
  }

  userDesc():any {

    let user=JSON.parse(localStorage.getItem(authDataString));
    
    return user;
  }

  sig(user:User, userService: UserService):any {

    localStorage.setItem(authDataString, JSON.stringify(user));

    userService.create(user).subscribe(data => {
      user = data.data
    })

    return user;
  }

  i18n() {
    return {
      get: () => localStorage.getItem('i18n'),
      set: (lang: string) => localStorage.setItem('i18n', lang)
    }
  };
  logOut():Boolean {
    localStorage.removeItem(authDataString);
    return;
  }
}
