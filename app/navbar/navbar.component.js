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
var core_1 = require("@angular/core");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
/**
 * Created by peikanghu on 7/11/16.
 */
var NavbarComponent = (function () {
    function NavbarComponent() {
        this.isNavCollapsed = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.showMenuToggled = function (event) {
        this.isNavCollapsed = !this.isNavCollapsed;
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'phu-navbar',
            directives: [ng2_bootstrap_1.CollapseDirective, ng2_bootstrap_1.DROPDOWN_DIRECTIVES],
            styleUrls: ['app/navbar/navbar.component.css'],
            templateUrl: 'app/navbar/navbar.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map