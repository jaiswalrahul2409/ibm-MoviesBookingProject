import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.css']
})
export class TheatreComponent implements OnInit {

  searchuserid: string ="";
  deluserid: string ="";
  responseBack : any; 
  list: boolean=false;
  del: boolean=false;
  sear: boolean=false;
  crea: boolean=false;
  tid: string = "";
  nss1: string = "";
  nss2: string = "";
  time: string = "";
  m1: string = "";
  m2: string = "";
  city: string = "";
  tprice: string = "";
  tname: string="";
  tmap: string="";


  constructor(private router: Router, private httpRef : HttpClient) { }

  ngOnInit(): void {
  }


  logout(){
    localStorage.removeItem('userName');
    this.router.navigate(['login']);
  }

  
  create(){
    let obs = this.httpRef.post("http://localhost:8081/theatres/create",
    {
        "theatreId": this.tid,
        "noOfSeatsInScreen1": this.nss1,
        "noOfSeatsInScreen2": this.nss2,
        "timings": this.time,
        "movie1Id": this.m1,
        "movie2Id": this.m2,
        "city": this.city,
        "theatrePrice": this.tprice,
        "name": this.tname,
        "map": this.tmap
    })
    .subscribe(
    data  => {
      alert("Theatre Added Successfully");
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
    
    let obs = this.httpRef.get("http://localhost:8081/theatres");
    this.list=!this.list;
    this.del=false;
    this.sear=false;
    this.crea=false;
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
    let obs = this.httpRef.delete("http://localhost:8081/theatres/remove/" + this.deluserid);
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
    let obs = this.httpRef.get("http://localhost:8081/theatre/" + this.searchuserid);
    obs.subscribe((responseBack) => {
    this.responseBack = responseBack;
    console.log(this.responseBack);
  });
}

}
