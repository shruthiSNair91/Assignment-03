import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get("http://localhost:3000/products");
  }
  newProduct(item){
    return this.http.post("http://localhost:3000/insert", {"product":item})
    .subscribe(data=>console.log(data));
  }
  removeItem(id){
    return this.http.post("http://localhost:3000/delete", {"pid":id})
    .subscribe(data=>console.log(data));
  }
  updateItem(id){

    return this.http.post("http://localhost:3000/edit", {"pid":id})
    }
  updateSingleItem(item)
  {
    return this.http.post("http://localhost:3000/singleItem", {"product":item})
    .subscribe(data=>console.log(data))
  }

  signupData(data)
  {
    return this.http.post("http://localhost:3000/signup", {"signupdata":data})
    .subscribe(data=>console.log(data));
  }

  login(user)
  { 

    return this.http.post("http://localhost:3000/login",{"loginUser":user})
        
  }

}
