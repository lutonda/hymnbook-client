import { AdminNavbarComponent } from './../shared/admin-navbar/admin-navbar.component';
import { FooterComponent } from './../shared/footer/footer.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormPartsComponent } from './parts/form-parts/form-parts.component';
import { CreatePartsComponent } from './parts/create-parts/create-parts.component';
import { UpdatePartsComponent } from './parts/update-parts/update-parts.component';
import { ListHymnComponent } from './hymns/list-hymn/list-hymn.component';
import { UpdateHymnComponent } from './hymns/update-hymn/update-hymn.component';
import { CreateHymnComponent } from './hymns/create-hymn/create-hymn.component';
import { SidebarComponent } from './../shared/sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ListTypePartsComponent } from './typePart/list-typeParts/list-type-parts/list-type-parts.component';
import { FormHymnComponent } from './hymns/form-hymn/form-hymn.component';



@NgModule({
  declarations: [
    SidebarComponent,
    CreateHymnComponent,
    UpdateHymnComponent,
    ListHymnComponent,
    UpdatePartsComponent,
    CreatePartsComponent,
    FormPartsComponent,
    AdminComponent,
    ListTypePartsComponent,
    FormHymnComponent,
    AdminNavbarComponent
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
    AutocompleteLibModule
  ]
})
export class AdminModule { }
