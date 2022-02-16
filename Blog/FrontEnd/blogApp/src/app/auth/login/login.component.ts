import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//routing



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { 
    

  }
  loginForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern('[a-z A-Z]*')])
  })

  collectData(){
    console.warn(this.loginForm.value);
  }
  // defining email property
  get email(){
    return this.loginForm.get('email')
  }
  get name() {
    return this.loginForm.get('name')
  }
  get address() {
    return this.loginForm.get('address')
  }
  get mobile() {
    return this.loginForm.get('mobile')
  }
  get password() {
    return this.loginForm.get('password')
  }
  ngOnInit(): void {
  }

  //
  

}
