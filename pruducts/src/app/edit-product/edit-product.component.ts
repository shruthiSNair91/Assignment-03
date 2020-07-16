import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product-list/product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  title:string="Remove Product";
products : ProductModel [];
  imageWidth : number=50;
  imageMargin : number=2;

  constructor(private prodService : ProductService, private router:Router) { }
  productItem= new ProductModel(null,null,null,null,null,null,null,null);

  ngOnInit(): void { 
    this.prodService.getProducts()
    .subscribe((data)=>{
          this.products=JSON.parse(JSON.stringify(data));
          console.log(this.products);
    });
   }
  
  }
