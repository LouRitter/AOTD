import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Auth } from '../auth.service';
@Component({
    moduleId: module.id,
    selector: "profile-page",
    templateUrl: "profile.component.html",
    styleUrls: ["profile.component.css"]
})

export class ProfileComponent implements OnInit {
    constructor(private router: Router,private auth: Auth) {}
    
    ngOnInit(): void {}
};