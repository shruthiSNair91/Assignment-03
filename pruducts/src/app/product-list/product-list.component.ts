import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  title:String="Product-List";

  products : ProductModel [];  //product is the model class for product item
  showImage:boolean=false;
  //Image properties
  imageWidth : number=50;
  imageMargin : number=2;

  constructor(private prodService : ProductService) { }
  toggleImage():void{
    this.showImage=!this.showImage;
  }

  ngOnInit(): void {
      this.prodService.getProducts()
      .subscribe((data)=>{
            this.products=JSON.parse(JSON.stringify(data));
      });
  }
    
  
}
