import { Component, OnInit } from '@angular/core';
import {IChildrenitem} from './childrenitem'

@Component({
    templateUrl:'./childrenitem.component.html'
})
export class ChildrenitemComponent {

    pageTitle='Children Items';
 
    childrenItems:any[]=[
        {
        "chItemId" : 1,        
        "chItemCode": 'CH-001',
        "chItemName":'T-shirt',
        "price":200
       },
       {
        "chItemId" : 2,
        "chItemCode": 'CH-002',
        "chItemName":'Shirt',        
        "price":200
       },
       {
        "chItemId" : 3,
        "chItemCode": 'CH-003',
        "chItemName":'Pant',        
        "price":200
       }
    ];
    _listItem='ab';
    get listFilter():string{
        return this._listItem;
    }
    set listFilter(value:string){
        this._listItem=value;
        this.filteredChilitem=this.listFilter ? this.performFilter(this.listFilter):this.childrenItems;
    }
    filteredChilitem:IChildrenitem[];
    childrenItems:IChildrenitem[]=[];

    performFilter(filterBy:string): IChildrenitem[]{
        filterBy=filterBy.toLocaleLowerCase();
        return this.childrenItems.filter((item:IChildrenitem)=>
        item.chItemName.toLocaleLowerCase().indexOf(filterBy)!==-1);
    }


}