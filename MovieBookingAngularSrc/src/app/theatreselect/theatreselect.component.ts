import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-theatreselect',
  templateUrl: './theatreselect.component.html',
  styleUrls: ['./theatreselect.component.css']
})
export class TheatreselectComponent implements OnInit {

  responseBack : any;
  name: string="";
  username: string="";
  search: string="";

  constructor(private router: Router, private httpRef : HttpClient, private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.name=this._Activatedroute.snapshot.paramMap.get("p1");
    console.log(this.name);
    let obs = this.httpRef.get("http://localhost:8081/theatres/");
    obs.subscribe((responseBack) => {
      this.responseBack = responseBack;
      console.log(this.responseBack);
      });
      this.username=localStorage.getItem('userName');
  } 
  seatselect(name){
    this.router.navigate(['seatselect', this.name, name]);
  }
 
  logout(){
    localStorage.removeItem('userName');
    this.router.navigate(['login']);
  }

  searc(){
    
    this.router.navigate(['search', this.search]);

}

}
