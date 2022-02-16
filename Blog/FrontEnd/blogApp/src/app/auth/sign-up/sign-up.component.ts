import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    address: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(30), Validators.pattern('[a-zA-Z 0-9]*')]),
    mobile: new FormControl('', [Validators.required,Validators.minLength(10), Validators.maxLength(10) ,Validators.pattern('[0-9]*')]),
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

}
