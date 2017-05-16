import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Auth }       from '../auth.service';
import { SearchService } from '../services/search.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms'; 
import { Pipe } from '@angular/core';
import 'rxjs/Rx'
@Component({
    moduleId: module.id,
    selector: "home-page",
    templateUrl: "home.component.html",
    styleUrls: ["home.component.css"]
})

export class HomeComponent implements OnInit {
  artist: any = [];
  album: any = [];
  searchField: FormControl;
  coolForm: FormGroup;

    constructor(private searchService:SearchService, private fb:FormBuilder, private auth: Auth) {
        this.searchField = new FormControl();
        this.coolForm = fb.group({search: this.searchField});
  }

  search(){
      this.searchService.search(this.searchField.value)
            .subscribe((info) => {
                this.artist = info.artists.items;
                console.log(info.artists.items);
            });
  }
      ngOnInit(): void {}

}
