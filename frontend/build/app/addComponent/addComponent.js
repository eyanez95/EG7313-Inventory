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
var router_1 = require("@angular/router");
var addComponent_form_1 = require("./addComponent.form");
var inventory_service_1 = require("../services/inventory.service");
var addComponentComponent = (function () {
    function addComponentComponent(inventoryService, router) {
        this.inventoryService = inventoryService;
        this.router = router;
        this.inventoryData = new addComponent_form_1.addComponentForm('', '', '', '');
        this.submitted = false;
    }
    addComponentComponent.prototype.addSubmit = function (value) {
        this.submitted = true;
        this.inventoryService.addInventory(value).subscribe(function (data) {
            console.log(data);
            $('#addComponent').modal('hide');
            window.location.reload();
        });
    };
    return addComponentComponent;
}());
addComponentComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'addComponent-cmp',
        templateUrl: 'addComponent.html'
    }),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService, router_1.Router])
], addComponentComponent);
exports.addComponentComponent = addComponentComponent;
