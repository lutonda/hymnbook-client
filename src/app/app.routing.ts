import { ListLanguagesComponent } from './admin/language/list-languages/list-languages.component';
import { UpdateLanguageComponent } from './admin/language/update-language/update-language.component';
import { CreateLanguageComponent } from './admin/language/create-language/create-language.component';
import { CreateAuthorComponent } from './admin/author/create-author/create-author.component';
import { UpdateAuthorComponent } from './admin/author/update-author/update-author.component';
import { ListAuthorComponent } from './admin/author/list-author/list-author.component';
import { UpdateTypePartComponent } from './admin/typePart/update-type-part/update-type-part.component';
import { CreateTypePartComponent } from './admin/typePart/create-type-part/create-type-part.component';
import { ListTypePartsComponent } from './admin/typePart/list-type-parts/list-type-parts.component';
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
import { UserListComponent } from './admin/user/user-list/user-list.component';

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

    { path: 'admin/type-part',              component: ListTypePartsComponent},
    { path: 'admin/type-part/create',       component: CreateTypePartComponent},
    { path: 'admin/type-part/update/:id',   component: UpdateTypePartComponent},

    { path: 'admin/authors',                component: ListAuthorComponent},
    { path: 'admin/authors/create',         component: CreateAuthorComponent},
    { path: 'admin/authors/update/:id',     component: UpdateAuthorComponent},

    { path: 'admin/languages',              component: ListLanguagesComponent},
    { path: 'admin/languages/create',       component: CreateLanguageComponent},
    { path: 'admin/languages/create',       component: CreateLanguageComponent},
    
    { path: 'admin/users',                  component: UserListComponent}



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
