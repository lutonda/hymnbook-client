
import { UserService } from './user.service';
import { Injectable, OnInit } from '@angular/core';

import { SocialAuthService } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})

export class AuthenficationService {


  active() {
    return localStorage.length != 0 ? true : false;
  }

  userDesc() {

    let u = '{"name": "' + localStorage.getItem('name') + '", "photoUrl": "' + localStorage.getItem('photoUrl') + '"}';

    return JSON.parse(u);

  }

  sig(data, userService: UserService) {

    localStorage.setItem('name', data.name);
    localStorage.setItem('photoUrl', data.photoUrl);

    userService.create(data).subscribe(data => {
      let d = data.data
    })

    return data;
  }
  i18n() {
    return {
      get: () => localStorage.getItem('i18n'),
      set: (lang: string) => localStorage.setItem('i18n', lang)
    }
  };
  logOut() {

    localStorage.clear();
    return false;
  }

}
