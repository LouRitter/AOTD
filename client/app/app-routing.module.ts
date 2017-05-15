import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormControl,
    FormGroup,
    FormBuilder } from '@angular/forms';

import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";
import { FeedComponent } from "./feed/feed.component";
import { ProfileComponent } from "./profile/profile.component"
import { SearchService } from './services/search.service';
import { ModuleWithProviders }         from '@angular/core';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: "feed", component: FeedComponent },
  { path: "profile", component: ProfileComponent},
  { path: '**', redirectTo: '' },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
