/// <reference path="../typings/index.d.ts" />
"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_component_1 = require('./app.component');
var http_1 = require("@angular/http");
/**
 * Created by peikanghu on 7/11/16.
 */
// ngAria can dynamically support ARIA for accessibility.
platform_browser_dynamic_1.bootstrap(app_component_1.default, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map