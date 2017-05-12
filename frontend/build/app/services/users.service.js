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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
        this.url = "/api/v1/users";
    }
    //add a user
    UsersService.prototype.addUser = function (value) {
        var valueString = JSON.stringify(value);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log("The value has been returned.");
        return this.http.post(this.url, valueString, options).map(function (res) { return res.json(); });
    };
    UsersService.prototype.getUsers = function () {
        return this.http.get(this.url).map(function (res) { return res.json(); }); //converts observable into JSON file format
    };
    //creating a search query in flask
    UsersService.prototype.queryUser = function (value) {
        return this.http.get(this.url + '?q={"filters":[{"name":"email","op":"e", "val":' + value.username + '"}]}').map(function (res) { return res.json(); });
    };
    //login a user
    UsersService.prototype.loginUser = function (value) {
        // this.http.post(this.url, value);
        // console.log(value);
    };
    UsersService.prototype.deleteEmployee = function (value) {
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: header });
        return this.http.delete(this.url + "/" + value.id, options).map(function (res) { return res.json(); });
    };
    return UsersService;
}());
UsersService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UsersService);
exports.UsersService = UsersService;
