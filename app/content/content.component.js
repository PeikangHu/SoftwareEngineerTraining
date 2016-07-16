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
var snippet_service_1 = require("../shared/services/snippet.service");
var ng2_dragula_1 = require("ng2-dragula/ng2-dragula");
/**
 * Created by peikanghu on 7/11/16.
 */
var ContentComponent = (function () {
    function ContentComponent(snippetService, dragulaService) {
        this.snippetService = snippetService;
        this.dragulaService = dragulaService;
        this._isShownSidebar = true;
        this.stepTitleTooltip = 'Given nums = [2, 7] target = 9 Because nums[0] + nums[1] = 9 return [0, 1].';
        this.dragSnippetTooltip = 'Drag and drop to the bottom left.';
        this.isShownSidebarValueChanged = new core_1.EventEmitter();
        this.snippets = [];
        this.codes = [];
    }
    Object.defineProperty(ContentComponent.prototype, "isShownSidebar", {
        get: function () {
            return this._isShownSidebar;
        },
        enumerable: true,
        configurable: true
    });
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.snippetService.getSnippets().subscribe(function (snippets) { return _this.snippets = snippets; });
    };
    ContentComponent.prototype.showSidebarClicked = function (event) {
        event.preventDefault();
        this._isShownSidebar = !this._isShownSidebar;
        this.isShownSidebarValueChanged.emit(this._isShownSidebar);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ContentComponent.prototype, "isShownSidebarValueChanged", void 0);
    ContentComponent = __decorate([
        core_1.Component({
            selector: 'phu-content',
            directives: [ng2_bootstrap_1.DROPDOWN_DIRECTIVES, ng2_bootstrap_1.TOOLTIP_DIRECTIVES, ng2_dragula_1.Dragula],
            viewProviders: [ng2_dragula_1.DragulaService],
            providers: [snippet_service_1.default],
            styleUrls: ['app/content/content.component.css',
                'node_modules/dragula/dist/dragula.css'],
            templateUrl: 'app/content/content.component.html',
        }), 
        __metadata('design:paramtypes', [snippet_service_1.default, ng2_dragula_1.DragulaService])
    ], ContentComponent);
    return ContentComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ContentComponent;
//# sourceMappingURL=content.component.js.map