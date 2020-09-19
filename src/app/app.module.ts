
import { AdminModule } from './admin/admin.module';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxAudioPlayerModule, MatBasicAudioPlayerComponent } from 'ngx-audio-player';
// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

// for Router import:
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

// for Core import:
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FooterComponent } from './shared/footer/footer.component';
import { DragAndDropDirective } from './directive/drag-and-drop.directive';

import { SocialLoginModule, SocialAuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';


import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTransalationLoader(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DragAndDropDirective
  ],
  exports:[
    TranslateModule
  ],
  imports: [
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    ExamplesModule,
    HttpClientModule,
    ReactiveFormsModule,
    PagesModule,
    AdminModule,

    SocialLoginModule,
    // for HttpClient use:
    LoadingBarHttpClientModule,

    // for Router use:
    LoadingBarRouterModule,

    // for Core use:
    LoadingBarModule,
    NgxAudioPlayerModule,

    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-center',

    }),
    BrowserModule,
    DragDropModule,

    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTransalationLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [{
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('319413929151550'),
          }

        ],
      } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
