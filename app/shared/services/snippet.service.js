"use strict";
/**
 * Created by peikanghu on 7/12/16.
 */
var SnippetService = (function () {
    function SnippetService() {
        this.snippetStore = [];
        var snippets = [
            {
                name: "Validate inputs.",
                code: "if (num == null) return null;"
            },
            {
                name: "Check each number.",
                code: "for (int i = 0; i < nums.Length; i++)"
            },
            {
                name: "Create numberAndIndex:Dictionary.",
                code: "var numberAndIndex = new Dictionary<int, int>();"
            },
            {
                name: "Get one number.",
                code: "var number1 = nums[i];"
            },
            {
                name: "Get the other number.",
                code: "var number2 = target - number1;"
            },
            {
                name: "Check whether a number is contained.",
                code: "if (numberAndIndex.ContainsKey(number2))"
            },
            {
                name: "Fill in number and index.",
                code: "numberAndIndex[number1] = i;"
            },
            {
                name: "Return result.",
                code: "return new [] {numberAndIndex[number2], i};"
            },
        ];
        this.snippetStore = snippets.map(function (snippet) {
            return {
                name: snippet.name,
                code: snippet.code
            };
        });
    }
    return SnippetService;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SnippetService;
//# sourceMappingURL=snippet.service.js.map