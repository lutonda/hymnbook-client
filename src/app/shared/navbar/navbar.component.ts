import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SocialAuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

import {AuthenficationService} from 'app/services/authenfication.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    user: SocialUser;
    loggedIn: Boolean=false;

    private toggleButton: any;
    private sidebarVisible: boolean=false;

    constructor(
        public location: Location, 
        private element : ElementRef,
        private authService: SocialAuthService,
        private router: Router, 
        private authentification: AuthenficationService, 
        private toastr: ToastrService
        
        ) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];

        this.user = new SocialUser();
        
        
        if(this.authentification.active()){

            this.loggedIn=true;
            this.user=this.authentification.userDesc();
        }
         else
            this.loggedIn=false;

    }

    signInFacebook():void{
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(data => {this.loggedIn=true;this.user = this.authentification.sig(data);});
    }

    logOut():void{
        this.loggedIn=this.authentification.log();
        this.toastr.info('Disconnected');
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
