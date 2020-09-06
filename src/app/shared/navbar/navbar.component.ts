import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SocialAuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    user: SocialUser;
    loggedIn: Boolean;

    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(
        public location: Location, 
        private element : ElementRef,
        private authService: SocialAuthService,
        private router: Router, 
        private toastr: ToastrService
        
        ) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];

        this.user = new SocialUser();

        
        if(localStorage.length!=0){
            this.loggedIn=true;
            this.user.idToken=localStorage.getItem('token');
            this.user.name=localStorage.getItem('name');
            this.user.photoUrl=localStorage.getItem('photo');
        }
         else
            this.loggedIn=false;
    }

    signInFacebook():void{
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(data => {   
  
          if (data) {
  
            this.toastr.success('Success', "It's done!");
  
            this.user=data;
  
            console.log(this.user); 
            
            localStorage.setItem('token', this.user.authToken);
            localStorage.setItem('photo', this.user.photoUrl);
            localStorage.setItem('name', this.user.name);

  
            this.loggedIn=true;
  
          }
          else{
            this.toastr.error('Erro', 'Something was wrong!');
            this.loggedIn=false;
          }
    
        })
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };
  
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if( titlee === '/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }
}
