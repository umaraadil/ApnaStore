import { Component } from '@angular/core'

@Component({
    selector:'pm-men',
    templateUrl:'menItem.component.html',
    styleUrls:['./menItem.component.css']
})
export class MenItemComponent{
    pageTitle='ApnaStore';
    listMenItem:string='Search';
    menItem:any[]=[
        {
            "menProdId":1,
            "menProdName":"Shirt",
            "menProdCode":"men-001",
            "price":650,
            "imageUrl":"assets/images/shirt.png"
        },
        {
            "menProdId":2,
            "menProdName":"Pant",
            "menProdCode":"men-002",
            "price":750,
            "imageUrl":"assets/images/shirt.png"
        }
    ]
}