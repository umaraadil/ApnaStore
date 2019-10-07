import { Component, OnInit } from '@angular/core'
import { IMenitem } from './menItem';
import { MenitemService } from './menitem.service';

@Component({
    //  selector:'pm-men',
    templateUrl:'menItemList.component.html',
    styleUrls:['./menItemList.component.css']
})
export class MenItemComponent implements OnInit{
    pageTitle='ApnaStore';
    errorMessage='';
    _listFilter=' ';
    get listFilter():string{
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter=value;
        this.filteredMenitem=this.listFilter ? this.performFilter(this.listFilter):this.menItems;
    }
    filteredMenitem:IMenitem[]=[];   
    menItems:IMenitem[]=[];

constructor(private menitemService:MenitemService){
    
    this.listFilter='';
} 

    performFilter(filterBy:string):IMenitem[]{
        filterBy=filterBy.toLocaleLowerCase();
        return this.menItems.filter((items :IMenitem)=>
        items.menProdName.toLocaleLowerCase().indexOf(filterBy)!==-1);
    }
        ngOnInit():void{
            this.menitemService.getMenitems().subscribe({
                next:menItems =>
                {
                    this.menItems=menItems,
                    this.filteredMenitem=this.menItems;
                },
                error:err=>this.errorMessage=err
            });            
        }
}