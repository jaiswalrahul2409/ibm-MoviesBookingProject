import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName: string = "";
  lastName: string = "";
  phoneNumber: string = "";
  gender: string = "";
  city: string = "";
  email: string = "";
  password: string = "";
  url: string = "";
  responseBack: any;

  constructor(private router: Router, private httpRef: HttpClient) {

  }
  displayMessage(val) {
    console.log(val);
  }

  register() {

    let obs1 = this.httpRef.get("http://localhost:8081/users");
    obs1.subscribe((responseBack) => {
      this.responseBack = responseBack;
      console.log(this.responseBack);
      for (let response in responseBack) {

        if (responseBack[response].email == this.email) {
          alert("This email is already registered. Please Login");
          this.router.navigate(['login']);
        }
        else {

          let obs = this.httpRef.post("http://localhost:8082/register/users",
            {
              "firstName": this.firstName,
              "lastName": this.lastName,
              "phoneNumber": this.phoneNumber,
              "gender": this.gender,
              "city": this.city,
              "email": this.email,
              "password": this.password
            })
            .subscribe(
              data => {
                console.log(data);
              
                  localStorage.setItem('userName', this.firstName);
                  this.router.navigate(['otp', data]);
              },
              error => {
                console.log("Error", error);
                

              }
            );


        }

      }

    });





  }

  ngOnInit(): void {
  }

}
