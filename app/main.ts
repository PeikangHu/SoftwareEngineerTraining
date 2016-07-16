/// <reference path="../typings/index.d.ts" />

import {bootstrap} from "@angular/platform-browser-dynamic";
import AppComponent from './app.component';
import {HTTP_PROVIDERS} from "@angular/http";

/**
 * Created by peikanghu on 7/11/16.
 */

// ngAria can dynamically support ARIA for accessibility.
bootstrap(AppComponent, [HTTP_PROVIDERS]);