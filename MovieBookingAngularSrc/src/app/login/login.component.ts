import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  url: string = "";
  responseBack: any;
  responseBack1: any;

  constructor(private router: Router, private httpRef: HttpClient, private _Activatedroute:ActivatedRoute) { 

  }

  displayMessage(val) {
    console.log(val);
  }

  login() {
    if (this.email == "admin@gmail.com" && this.password == "admin") {
      window.location.href = 'http://localhost:4201/user';
    }
    else {
      let obs = this.httpRef.post("http://localhost:8082/login",
        {
          "email": this.email
        });
      obs.subscribe((responseBack) => {
        this.responseBack = responseBack;
        console.log(this.responseBack.firstName);
      });
    
    if (this.responseBack.password == this.password && this.email==this.responseBack.email) {
      localStorage.setItem('userName', this.responseBack.firstName);
      this.router.navigate(['home']);
    }
    if(this.responseBack.password != this.password || this.email!=this.responseBack.email){
      
      alert("User Name or Password is Incorrect");
    }
  }
  }
  ngOnInit(): void {
  }

}
