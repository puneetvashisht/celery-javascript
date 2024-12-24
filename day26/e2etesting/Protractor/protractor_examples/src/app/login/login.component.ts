import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username?: string;
  public password?: string;
  public loggedIn: boolean = false;
  public error: boolean=false;

  

  constructor(private router:Router,private loginService:LoginService){}

  login() {
    
    // if (this.username === 'testuser' && this.password === 'test') {
      this.loginService.login().subscribe((res:any)=>{
      if (res.success) {
        this.router.navigate(['/dashboard'])
      }else{
           this.error=true
         }
     })
    // }else{
    //   this.error=true
    // }
  }
}
