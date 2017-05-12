import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { addComponentForm } from './addComponent.form';
import { InventoryService } from '../services/inventory.service';

@Component({
  moduleId: module.id,
  selector: 'addComponent-cmp',
  templateUrl: 'addComponent.html'
})
export class addComponentComponent {
  inventoryData = new addComponentForm('', '', '', '');
  submitted = false;

  constructor(private inventoryService: InventoryService, private router: Router) { }

  addSubmit(value: any) {
    this.submitted = true;
    this.inventoryService.addInventory(value).subscribe(data => {
      console.log(data);
      $('#addComponent').modal('hide');
      window.location.reload();

    });

  }

}