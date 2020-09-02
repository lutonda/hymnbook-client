import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

// for Router import:
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

// for Core import:
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { HymnsComponent } from './pages/hymns/hymns.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CreateHymnComponent } from './admin/hymns/create-hymn/create-hymn.component';
import { UpdateHymnComponent } from './admin/hymns/update-hymn/update-hymn.component';
import { ListHymnComponent } from './admin/hymns/list-hymn/list-hymn.component';
import { UpdatePartsComponent } from './admin/parts/update-parts/update-parts.component';
import { CreatePartsComponent } from './admin/parts/create-parts/create-parts.component';
import { FromPartsComponent } from './admin/parts/from-parts/from-parts.component';
import { FormPartsComponent } from './admin/parts/form-parts/form-parts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HymnsComponent,
    SidebarComponent,
    CreateHymnComponent,
    UpdateHymnComponent,
    ListHymnComponent,
    UpdatePartsComponent,
    CreatePartsComponent,
    FromPartsComponent,
    FormPartsComponent
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

    // for HttpClient use:
    LoadingBarHttpClientModule,

    // for Router use:
    LoadingBarRouterModule,

    // for Core use:
    LoadingBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
