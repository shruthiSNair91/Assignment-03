import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product-list/product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

title:string="Remove Product";
products : ProductModel [];
  imageWidth : number=50;
  imageMargin : number=2;

  constructor(private prodService : ProductService, private router:Router) { }

  ngOnInit(): void {
    this.prodService.getProducts()
      .subscribe((data)=>{
            this.products=JSON.parse(JSON.stringify(data));
            console.log(this.products);
      });
     }
     delItem(id){
       this.prodService.removeItem(id)
      alert('Delete?');
      this.router.navigate(['/']);

     }

  }