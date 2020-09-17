import { ProgressBarComponent } from './../components/progress-bar/progress-bar.component';
import { ComponentsModule } from './../components/components.module';
import { CreateTypePartComponent } from './typePart/create-type-part/create-type-part.component';
import { AdminNavbarComponent } from './../shared/admin-navbar/admin-navbar.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListHymnComponent } from './hymns/list-hymn/list-hymn.component';
import { UpdateHymnComponent } from './hymns/update-hymn/update-hymn.component';
import { CreateHymnComponent } from './hymns/create-hymn/create-hymn.component';
import { SidebarComponent } from './../shared/sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ListTypePartsComponent } from './typePart/list-type-parts/list-type-parts.component';
import { FormHymnComponent } from './hymns/form-hymn/form-hymn.component';
import { UpdateTypePartComponent } from './typePart/update-type-part/update-type-part.component';
import { CreateAuthorComponent } from './author/create-author/create-author.component';
import { ListAuthorComponent } from './author/list-author/list-author.component';
import { UpdateAuthorComponent } from './author/update-author/update-author.component';
import { CreateLanguageComponent } from './language/create-language/create-language.component';
import { ListLanguagesComponent } from './language/list-languages/list-languages.component';
import { UpdateLanguageComponent } from './language/update-language/update-language.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    SidebarComponent,
    CreateHymnComponent,
    UpdateHymnComponent,
    ListHymnComponent,
    AdminComponent,
    ListTypePartsComponent,
    FormHymnComponent,
    AdminNavbarComponent,
    CreateTypePartComponent,
    UpdateTypePartComponent,
    CreateAuthorComponent,
    ListAuthorComponent,
    UpdateAuthorComponent,
    CreateLanguageComponent,
    ListLanguagesComponent,
    UpdateLanguageComponent,
    ProgressBarComponent,
    UserListComponent,
],
  imports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    NouisliderModule,
    RouterModule,
    JwBootstrapSwitchNg2Module,
    AutocompleteLibModule,
    DragDropModule
  ]
})
export class AdminModule { }
