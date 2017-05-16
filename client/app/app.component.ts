import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Auth } from './auth.service';


@Component({
  moduleId: module.id,
  selector: 'main-app',
  providers: [ Auth ],
  templateUrl: "app.component.html",
  styleUrls: ['app.component.css']
})

export class AppComponent {
	
  constructor(private auth: Auth) {}
};