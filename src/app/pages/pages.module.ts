import { HomeComponent } from './home/home.component';
import { SearchboxComponent } from './../components/searchbox/searchbox.component';
import { HymnsComponent } from './hymns/hymns.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    FormsModule,
      CommonModule,
      FormsModule,
      NgbModule,
      NouisliderModule,
      RouterModule,
      JwBootstrapSwitchNg2Module,
      AutocompleteLibModule
    ],
  declarations: [
    HymnsComponent,
    HomeComponent,
    SearchboxComponent,
  ],
  exports:[  ]
})
export class PagesModule { }
