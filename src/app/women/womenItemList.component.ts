import { Component, OnInit } from '@angular/core';
import { IWomenitem } from './womentitem';
import { WomenitemService } from './womenitem.service';

@Component({
//     selector:'',
    templateUrl:'./womenItemList.component.html'
})
export class WomenItemComponent implements OnInit{
      errorMessage='';
      _listFilter='';
      get listFilter():string{
            return this._listFilter;
      }
      set listFilter(value:string){
            this._listFilter=value;
            this.filteredWomentem=this.listFilter ? this.performFilter(this.listFilter):this.womenItems;
      }
      filteredWomentem:IWomenitem[]=[];
      womenItems:IWomenitem[]=[];
      constructor(private womenitemService : WomenitemService){
            this.listFilter='a';
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
                       this.womenItems=this.womenItems,
                       this.filteredWomentem=this.womenItems;
                 },
                 error:err=>this.errorMessage=err
           });
      }
}