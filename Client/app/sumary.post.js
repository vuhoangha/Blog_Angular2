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
    }
    SumaryPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataProvider.getAllActor().subscribe(function (response) {
            _this.listPost = response;
            console.log(response);
        }, function (error) {
            console.error(error);
        });
    };
    return SumaryPostComponent;
}());
SumaryPostComponent = __decorate([
    core_1.Component({
        selector: 'sumary-post',
        template: "\n  <div>\nvuhoangha\n            </div>\n  ",
        styles: ['h4 {color:blue;}']
    }),
    __metadata("design:paramtypes", [request_1.DataProvider])
], SumaryPostComponent);
exports.SumaryPostComponent = SumaryPostComponent;
//# sourceMappingURL=sumary.post.js.map