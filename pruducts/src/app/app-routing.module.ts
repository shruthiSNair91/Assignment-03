import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component'
import { from } from 'rxjs';
import { EditProductComponent } from './edit-product/edit-product.component';
import {  SingleEditProductComponent } from './single-edit-product/single-edit-product.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
    {path:'',component:ProductListComponent},
    {path:'add',component:NewProductComponent},
    {path:'delete',component:DeleteProductComponent},
    {path:'edit',component:EditProductComponent},
    {path:'sngedit/:pid',component:SingleEditProductComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
