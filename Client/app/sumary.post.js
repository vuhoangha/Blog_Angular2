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
var request_1 = require("./server/request");
var SumaryPostComponent = (function () {
    function SumaryPostComponent(dataProvider) {
        this.dataProvider = dataProvider;
        this.listPost = [];
        this.dicCat = {};
        this.dicActor = {};
    }
    SumaryPostComponent.prototype.ngOnInit = function () {
        this.getAllActor();
    };
    SumaryPostComponent.prototype.getAllActor = function () {
        var _this = this;
        this.dataProvider.getAllActor().subscribe(function (response) {
            if (response != null) {
                if (Array.isArray(response)) {
                    for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                        var actor = response_1[_i];
                        var objActor = JSON.parse(actor);
                        _this.dicActor[objActor.acId] = objActor;
                    }
                }
            }
            console.log(_this.dicActor);
            _this.getAllCategory();
        }, function (error) {
            console.error(error);
        });
    };
    SumaryPostComponent.prototype.getAllCategory = function () {
        var _this = this;
        this.dataProvider.getAllCategory().subscribe(function (response) {
            if (response != null) {
                if (Array.isArray(response)) {
                    for (var _i = 0, response_2 = response; _i < response_2.length; _i++) {
                        var category = response_2[_i];
                        var objActor = JSON.parse(category);
                        _this.dicCat[objActor.catId] = objActor;
                    }
                }
            }
            console.log(_this.dicCat);
            _this.getAllPost();
        }, function (error) {
            console.error(error);
        });
    };
    SumaryPostComponent.prototype.getAllPost = function () {
        var _this = this;
        this.dataProvider.getAllPost().subscribe(function (response) {
            if (response != null) {
                console.log(response);
                if (Array.isArray(response)) {
                    for (var _i = 0, response_3 = response; _i < response_3.length; _i++) {
                        var post = response_3[_i];
                        console.log(post);
                        var objActor = JSON.parse(post);
                        console.log(objActor);
                        var newObj = {
                            postTitle: '',
                            summary: '',
                            acName: '',
                            catName: ''
                        };
                        newObj.postTitle = objActor.postTitle;
                        newObj.summary = objActor.summary;
                        if (Reflect.has(_this.dicActor, objActor.acId)) {
                            newObj.acName = _this.dicActor[objActor.acId].acName;
                        }
                        if (Reflect.has(_this.dicCat, objActor.acId)) {
                            newObj.catName = _this.dicCat[objActor.catId].catName;
                        }
                        _this.listPost.push(newObj);
                    }
                    console.log(_this.listPost);
                }
            }
        }, function (error) {
            console.error(error);
        });
    };
    return SumaryPostComponent;
}());
SumaryPostComponent = __decorate([
    core_1.Component({
        selector: 'sumary-post',
        templateUrl: './app/sumary.post.html',
        styles: ['h4 {color:blue;}']
    }),
    __metadata("design:paramtypes", [request_1.DataProvider])
], SumaryPostComponent);
exports.SumaryPostComponent = SumaryPostComponent;
//# sourceMappingURL=sumary.post.js.map