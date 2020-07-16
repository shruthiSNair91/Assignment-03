import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductModel } from '../product-list/product.model';


@Component({
  selector: 'app-single-edit-product',
  templateUrl: './single-edit-product.component.html',
  styleUrls: ['./single-edit-product.component.css']
})
export class SingleEditProductComponent implements OnInit {

title:String="Update Product";
id;
  constructor(private prodService:ProductService, private router:Router, 
    private route:ActivatedRoute ) { }
  
  productItem= new ProductModel(null,null,null,null,null,null,null,null);

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('pid');
      
      this.prodService.updateItem(this.id)
      .subscribe((data)=>{
                console.log(data);
                this.productItem=JSON.parse(JSON.stringify(data))
                console.log(this.productItem);
  });
} 
  ngOnDestroy(){
    this.id.unsubscribe;
  }
UpdateSingleProduct(){
  //alert("updateSingleproduct called");
  this.prodService.updateSingleItem(this.productItem);
  this.router.navigate(['/']);

}
    
}
