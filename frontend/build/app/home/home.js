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
var inventory_service_1 = require("../services/inventory.service");
var HomeComponent = (function () {
    function HomeComponent(inventoryService) {
        this.inventoryService = inventoryService;
        this.name = 'HomeComponent';
        this.inventory = [];
        this.inventoryData = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inventoryService.getInventory().subscribe(function (data) {
            _this.inventory = data.objects;
            console.log(data);
            console.log(data.objects);
        });
    };
    HomeComponent.prototype.deleteComponent = function (inventoryData) {
        this.inventoryData = inventoryData;
        $('#deleteComponent').modal("show");
    };
    HomeComponent.prototype.deleteComponentConfirm = function (value) {
        this.inventoryService.deleteInventory(value).subscribe(function (data) {
            console.log(data);
            $('#deleteComponent').modal('hide');
            window.location.reload();
        });
    };
    HomeComponent.prototype.editComponent = function (inventoryData) {
        this.inventoryData = inventoryData;
        $('#editComponent').modal("show");
    };
    HomeComponent.prototype.saveChanges = function (value) {
        this.inventoryService.updateInventory(value).subscribe(function (data) {
            console.log(data);
            $('#editComponent').modal("hide");
            window.location.reload();
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'home-cmp',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
