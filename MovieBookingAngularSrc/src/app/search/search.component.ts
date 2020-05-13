import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  responseBack : any; 
  search: string = "";
  username : String="";
  url: string="";

  constructor(private router: Router, private httpRef : HttpClient, private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.username=localStorage.getItem('userName');
    this.search=this._Activatedroute.snapshot.paramMap.get("p1");

    let obs = this.httpRef.get("http://localhost:8081/movie/s/" + this.search);
      obs.subscribe((responseBack) => {
        this.responseBack = responseBack;
        console.log(this.responseBack);
        });
  }

  logout(){
    localStorage.removeItem('userName');
    this.router.navigate(['login']);
  }

  theatre(name){
    this.router.navigate(['theatreselect', name]);
  }

  searc(){
    
    this.router.navigate(['search', this.search]);

}

}
