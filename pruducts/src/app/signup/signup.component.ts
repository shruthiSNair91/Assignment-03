import { Component, OnInit } from '@angular/core';
import { SignupModel } from '../signup/signup.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupData=new SignupModel(null,null,null,null);

  constructor(private pService:ProductService, private router:Router) { }

  ngOnInit(): void {
  }

  AddSignupData()
  {
    alert('User Added Successfully');
    this.pService.signupData(this.signupData);
    this.router.navigate(['/login']);

  }

}
