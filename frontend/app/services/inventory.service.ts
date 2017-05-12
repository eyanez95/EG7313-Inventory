import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InventoryService {
       
    url: string = '/api/v1/inventory';

    constructor(private http: Http) {}

    //add a component to the inventory
    addInventory(value: any){
        let valueString = JSON.stringify(value);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url, valueString, options).map(res => res.json());
    }

    getInventory(){
        return this.http.get(this.url).map(res => res.json());
    }

    updateInventory(value: any){
        let valueString = JSON.stringify(value);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(this.url + "/" + value.id, valueString, options).map(res => res.json());
    }

    deleteInventory(value: any){
        let header = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: header });

        return this.http.delete(this.url + "/" + value.id, options).map(res => res.json());
    }
}