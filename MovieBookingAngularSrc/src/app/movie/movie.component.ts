import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  searchuserid: string ="";
  deluserid: string ="";
  responseBack : any; 
  list: boolean=false;
  del: boolean=false;
  sear: boolean=false;
  crea: boolean=false;
  mname: string = "";
  mrating: string = "";
  mdesc: string = "";
  mcast: string = "";
  mgenre: string = "";
  mlang: string = "";
  mleng: string = "";
  mprice: string = "";
  mid: string = "";
  mpost: string = "";
  mbann: string = "";


  constructor(private router: Router, private httpRef : HttpClient) { }

  ngOnInit(): void {
  }


  logout(){
    localStorage.removeItem('userName');
    this.router.navigate(['login']);
  }

  create(){
    let obs = this.httpRef.post("http://localhost:8081/movie/create",
    {
        "movieId": this.mid,
        "name": this.mname,
        "ratings": this.mrating,
        "description": this.mdesc,
        "cast": this.mcast,
        "genre": this.mgenre,
        "language": this.mlang,
        "duration": this.mleng,
        "moviePrice": this.mprice,
        "bannerPath": this.mbann,
        "posterPath": this.mpost
    })
    .subscribe(
    data  => {
      alert("Movie Added Successfully");
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
    this.crea=false;
    this.sear=false;
    let obs = this.httpRef.get("http://localhost:8081/movies");
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
    let obs = this.httpRef.delete("http://localhost:8081/movie/remove/" + this.deluserid);
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
    let obs = this.httpRef.get("http://localhost:8081/movies/" + this.searchuserid);
    obs.subscribe((responseBack) => {
    this.responseBack = responseBack;
    console.log(this.responseBack);
  });
}

}
