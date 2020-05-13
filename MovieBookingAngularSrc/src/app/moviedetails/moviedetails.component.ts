import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {


  id: string="";
  responseBack : any; 
  username: string="";
  search:string="";

  constructor(private router: Router, private httpRef : HttpClient, private _Activatedroute:ActivatedRoute) {
    
   } 

  ngOnInit(): void{
    this.id=this._Activatedroute.snapshot.paramMap.get("p1");
      console.log(this.id);
      let obs = this.httpRef.get("http://localhost:8081/movies/" + this.id);
      obs.subscribe((responseBack) => {
        this.responseBack = responseBack;
        console.log(this.responseBack);
        });
        this.username = localStorage.getItem('userName');
  }

  theatre(){
    this.router.navigate(['theatreselect', this.responseBack.name]);
  }

  searc(){
    
    this.router.navigate(['search', this.search]);

}

  logout(){
    localStorage.removeItem('userName');
    this.router.navigate(['login']);
  }


}
