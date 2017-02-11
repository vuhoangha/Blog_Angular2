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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var DataProvider = (function () {
    function DataProvider(_http) {
        this._http = _http;
        this.urlActor = 'http://localhost:3000/actor';
        this.urlCategory = 'http://localhost:4000/category';
        this.urlPost = 'http://localhost:5000/post';
    }
    DataProvider.prototype.getAllActor = function () {
        return this._http.get(this.urlActor).map(function (response) { return response.json(); });
    };
    DataProvider.prototype.getAllCategory = function () {
        return this._http.get(this.urlCategory).map(function (response) { return response.json(); });
    };
    DataProvider.prototype.getAllPost = function () {
        return this._http.get(this.urlPost).map(function (response) { return response.json(); });
    };
    DataProvider.prototype.getPostById = function (postId) {
        var key = { postId: postId };
        var newUrl = this.urlPost + '?key=' + JSON.stringify(key);
        return this._http.get(newUrl).map(function (response) { return response.json(); });
    };
    DataProvider.prototype.getActorById = function (actorId) {
        var key = { acId: actorId };
        var newUrl = this.urlActor + '?key=' + JSON.stringify(key);
        return this._http.get(newUrl).map(function (response) { return response.json(); });
    };
    DataProvider.prototype.getCategoryById = function (catId) {
        var key = { catId: catId };
        var newUrl = this.urlCategory + '?key=' + JSON.stringify(key);
        return this._http.get(newUrl).map(function (response) { return response.json(); });
    };
    return DataProvider;
}());
DataProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DataProvider);
exports.DataProvider = DataProvider;
//# sourceMappingURL=request.js.map