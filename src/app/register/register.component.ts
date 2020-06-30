import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { ConfirmPasswordDirective } from '../validators/confirm-password.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    firstName : ['user', Validators.required],
    lastName: ['3', Validators.required],
    email: ['user3@example.com', [Validators.required, Validators.email]],
    userName: ['userName3', Validators.required],
    password: ['user3', [Validators.required, Validators.minLength(5)]],
    confirmPassword: ['user3', [Validators.required, Validators.minLength(5)]]
  }, {validators: ConfirmPasswordDirective})
  constructor(private fb:FormBuilder, private ds:DataService, private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    this.ds.register(this.registerForm.value);
    this.router.navigate([''])
  }

  getControl(controlName){
    return this.registerForm.get(controlName);
  }
}
