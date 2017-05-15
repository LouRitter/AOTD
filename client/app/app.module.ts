import "./rxjs-extensions";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { AUTH_PROVIDERS }      from 'angular2-jwt';
import { SearchService } from './services/search.service';
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { FeedComponent } from "./feed/feed.component";
import {ProfileComponent} from "./profile/profile.component";
import {routing, appRoutingProviders } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent, 
    HomeComponent,
    FeedComponent,
    ProfileComponent,
  ],
  providers: [ appRoutingProviders, AUTH_PROVIDERS, SearchService],
  bootstrap: [ AppComponent ]
})

export class AppModule { }