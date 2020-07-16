import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

user=<any>{}

  constructor(private pService:ProductService, private route:Router) { }
 
  loginUser(){
          console.log(this.user);

          this.pService.login(this.user)
          .subscribe((userdata)=>{
                console.log(userdata)
                if(userdata==null){
                  alert('Invalid Username or password ');
                  this.route.navigate(['/login']);
              }
              else
                this.route.navigate(['/'])

                });
  }

  ngOnInit(): void {
  }

}
