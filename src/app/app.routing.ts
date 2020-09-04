import { ListTypePartsComponent } from './admin/typePart/list-typeParts/list-type-parts/list-type-parts.component';
import { CreateHymnComponent } from './admin/hymns/create-hymn/create-hymn.component';
import { HomeComponent } from './pages/home/home.component';
import { UpdateHymnComponent } from './admin/hymns/update-hymn/update-hymn.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import {HymnsComponent} from './pages/hymns/hymns.component'
import { ListHymnComponent } from './admin/hymns/list-hymn/list-hymn.component';

const routes: Routes =[
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                        component: HomeComponent },
    { path: 'nucleoicons',                  component: NucleoiconsComponent },
    { path: 'examples/landing',             component: LandingComponent },
    { path: 'examples/login',               component: LoginComponent },
    { path: 'examples/profile',             component: ProfileComponent },
    { path: 'hymns/:id',                    component: HymnsComponent },

    { path: 'admin/hymns',                  component: ListHymnComponent },
    { path: 'admin/hymns/create',           component: CreateHymnComponent },
    { path: 'admin/hymns/update/:id',       component: UpdateHymnComponent },
    { path: 'admin/hymns/:id',              component: HymnsComponent },

    { path: 'admin/type-part',               component: ListTypePartsComponent},

];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
