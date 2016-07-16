"use strict";
var snippet_service_1 = require("./services/snippet.service");
exports.SnippetService = snippet_service_1.default;
var snippet_1 = require("./interfaces/snippet");
exports.Snippet = snippet_1.default;
/**
 * Created by peikanghu on 7/11/16.
 */
var SHARED_PROVIDERS = [
    snippet_service_1.default
];
exports.SHARED_PROVIDERS = SHARED_PROVIDERS;
//# sourceMappingURL=shared.js.map