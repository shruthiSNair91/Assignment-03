import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:String="Product Management";

  constructor() { }
 
 
  ngOnInit(): void {
   
  }

}
