"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getgit(owner, repo, path) {
    return __awaiter(this, void 0, void 0, function* () {
        // A function to fetch files from github using the api 
        let data = yield fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`)
            .then(d => d.json())
            .then(d => fetch(`https://api.github.com/repos/${owner}/${repo}/git/blobs/${d.sha}`))
            .then(d => d.json())
            .then(d => JSON.parse(atob(d.content)));
        return data;
    });
}
var gg;
getgit("HappyGame-s", "HappyGame-s", "shop.json").then((value) => {
    gg = value;
});
