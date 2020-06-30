import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    userName : ['userName1', Validators.required],
    password : ['user1', [Validators.required, Validators.minLength(4)]]
  })
  constructor(private ds:DataService, private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    const success= this.ds.login(this.getControl('userName').value,this.getControl('password').value )
    if(success){
      alert("Login Successfull!!");
      this.router.navigate(['/tasks']);
    }
    else{
      alert("Invalid Credentials")
    }
  
  }
  getControl(controlName){
    return this.loginForm.get(controlName);
  }
}
