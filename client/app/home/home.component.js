"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_service_1 = require("../auth.service");
var search_service_1 = require("../services/search.service");
var forms_1 = require("@angular/forms");
require("rxjs/Rx");
var HomeComponent = (function () {
    function HomeComponent(searchService, fb, auth) {
        this.searchService = searchService;
        this.fb = fb;
        this.auth = auth;
        this.result = [];
        this.searchField = new forms_1.FormControl();
        this.coolForm = fb.group({ search: this.searchField });
    }
    HomeComponent.prototype.search = function () {
        var _this = this;
        this.searchService.search(this.searchField.value)
            .subscribe(function (result) {
            _this.result = result;
            console.log(result);
        });
    };
    HomeComponent.prototype.ngOnInit = function () { };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "home-page",
        templateUrl: "home.component.html",
        styleUrls: ["home.component.css"]
    }),
    __metadata("design:paramtypes", [search_service_1.SearchService, forms_1.FormBuilder, auth_service_1.Auth])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map