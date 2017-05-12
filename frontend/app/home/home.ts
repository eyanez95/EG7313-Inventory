import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service';

@Component({
  moduleId: module.id,
  selector: 'home-cmp',
  templateUrl: 'home.html'
})
export class HomeComponent implements OnInit {
  name = 'HomeComponent';
  inventory: any = [];
  inventoryData: any = '';

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.inventoryService.getInventory().subscribe(data => {
      this.inventory = data.objects;
      console.log(data);
      console.log(data.objects);
    });
  }

  deleteComponent(inventoryData: any) {
    this.inventoryData = inventoryData;
    $('#deleteComponent').modal("show");
  }

  deleteComponentConfirm(value: any) {
    this.inventoryService.deleteInventory(value).subscribe(data => {
      console.log(data);
      $('#deleteComponent').modal('hide');
      window.location.reload();
    });
  }

  editComponent(inventoryData: any) {
    this.inventoryData = inventoryData;
    $('#editComponent').modal("show");
  }

  saveChanges(value: any) {
    this.inventoryService.updateInventory(value).subscribe(data => {
      console.log(data);
      $('#editComponent').modal("hide");
      window.location.reload();
    });
  }

}