import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  searchuserid: string="";
  deluserid: string ="";
  responseBack : any; 
  list: boolean=false;
  del: boolean=false;
  sear: boolean=false;
  crea: boolean=false;
  fname: string = "";
  lname: string = "";
  uemail: string = "";
  upass: string = "";
  unum: string = "";
  ugend: string = "";
  ucity: string = "";
  userid: string="";
  

  constructor(private router: Router, private httpRef : HttpClient) { }

  ngOnInit(): void {
  }



  logout(){
    localStorage.removeItem('userName');
    this.router.navigate(['login']);
  }

  create(){
    let obs = this.httpRef.post("http://localhost:8081/users/create",
    {
      "firstName": this.fname,
      "lastName": this.lname,
      "email": this.uemail,
      "password": this.upass,
      "phoneNumber": this.unum,
      "gender": this.ugend,
      "city": this.ucity
    })
    .subscribe(
    data  => {
      alert("User Created Successfully");
    console.log("POST Request is successful ", data);
    
    },
    error  => {
    console.log("Error", error);
    }
    );
  }

  createUser(){
    this.crea=!this.crea;
    this.list=false;
    this.del=false;
    this.sear=false;
  }

  searchForUser(){
    this.del=false;
    this.sear=false;
    this.crea=false;
    let obs = this.httpRef.get("http://localhost:8081/users");
    this.list=!this.list;
    obs.subscribe((responseBack) => {
    this.responseBack = responseBack;
    console.log(this.responseBack);
    });
  }

  deleteUser(){
    this.crea=false;
    this.list=false;
    this.sear=false;
    this.del=!this.del;
  }

  delete(){
    let obs = this.httpRef.delete("http://localhost:8081/users/remove/" + this.deluserid);
    obs.subscribe((responseBack) => {
      this.responseBack = responseBack;
      console.log(this.responseBack);
    });
  }


  searchUser(){
    this.crea=false;
    this.list=false;
    this.del=false;
    this.sear=!this.sear;
  }

  searchUserId(){

  let obs = this.httpRef.get("http://localhost:8081/user/id" + this.searchuserid);
  obs.subscribe((responseBack) => {
    this.responseBack = responseBack;
    console.log(this.responseBack);
    });
}

  update(){

    let obs = this.httpRef.post("http://localhost:8081/users/create",
    {
      "userId": this.userid,
      "firstName": this.fname,
      "lastName": this.lname,
      "email": this.uemail,
      "password": this.upass,
      "phoneNumber": this.unum,
      "gender": this.ugend,
      "city": this.ucity
    })
    .subscribe(
    data  => {
      alert("User updated Successfully");
    console.log("POST Request is successful ", data);
    
    },
    error  => {
    console.log("Error", error);
    }
    );
    
  }
}