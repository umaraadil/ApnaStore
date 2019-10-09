import { Component, OnInit } from '@angular/core';
import { IWomenitem } from './womentitem';
import { WomenitemService } from './womenitem.service';

@Component({
//     selector:'',
    templateUrl:'./womenItemList.component.html',
    styleUrls:['./womenItemList.component.css']
})
export class WomenItemComponent implements OnInit{
      pageTitle='ApnaStore';
      errorMessage='';
      _listFilter='';
      get listFilter():string{
            return this._listFilter;
      }
      set listFilter(value:string){
            this._listFilter=value;
            this.filteredWomenitem=this.listFilter ? this.performFilter(this.listFilter):this.womenItems;
      }
      filteredWomenitem:IWomenitem[];
      womenItems:IWomenitem[]=[];
      constructor(private womenitemService : WomenitemService){
            this.listFilter='';
      }
      performFilter(filterBy:string):IWomenitem[]{
            filterBy=filterBy.toLocaleLowerCase();
            return this.womenItems.filter((item:IWomenitem)=>
            item.womenProdName.toLocaleLowerCase().indexOf(filterBy)!==-1);
      }
      ngOnInit():void{
           this.womenitemService.getWomenitems().subscribe({
                 next:womenItems=>
                 {
                       this.womenItems=womenItems,
                       this.filteredWomenitem=this.womenItems;
                 },
                 error:err=>this.errorMessage=err
           });
      }
}