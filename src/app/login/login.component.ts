import {Component,ElementRef,Renderer} from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../login';

@Component({
  selector:'login',
  templateUrl:'login.component.html',
  styleUrls:['./login.component.css']
})

export class loginComponent{
username;
password;
loginok;
loginFailed=false;
registerForm: FormGroup;
  login = new Login("", "");

  constructor(public router:Router,public formBuilder:FormBuilder,public elementref:ElementRef,public render:Renderer) { 
  }
  ngOnInit() {
    this.loginFailed=false;

    this.registerForm = this.formBuilder.group({
            username: ['',[Validators.required]],
            password: ['', Validators.required]
        });
  }
  loginCheck(username,password){
 
    if(username=="naren"&&password=="12345"){
// this.loginok=true;
this.router.navigate(['/welcome'])
    }else{
      this.loginFailed=true;
      //this.router.navigate(['/welcome'])
    }
  }
  clearError(){
    this.loginFailed=false;
  }
}