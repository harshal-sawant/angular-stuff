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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var studName_service_1 = require("./service/studName.service");
var AppComponent = (function () {
    function AppComponent(studnamenervice) {
        this.studnamenervice = studnamenervice;
        this.name = 'Angular';
        this.profile = {};
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studnamenervice.getUser().subscribe(function (data) { return _this.profile = data; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>Hello {{name}}</h1>\n\t\t<div>\n      {{ profile | json }}\n    </div>\n    <stud [ipdata]=\"profile | json \" ></stud>\n    \n",
        providers: [studName_service_1.StudNameService]
    }),
    __metadata("design:paramtypes", [studName_service_1.StudNameService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map