import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listtheatre',
  templateUrl: './listtheatre.component.html',
  styleUrls: ['./listtheatre.component.css']
})
export class ListtheatreComponent implements OnInit {

  search:string="";
  username: string="";
  responseBack : any;

  constructor(private router: Router, private httpRef : HttpClient, private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {

    let obs = this.httpRef.get("http://localhost:8081/theatres/");
    obs.subscribe((responseBack) => {
      this.responseBack = responseBack;
      console.log(this.responseBack);
      });
      this.username=localStorage.getItem('userName');
  }


  searc(){
    
    this.router.navigate(['search', this.search]);

}

  logout(){
    localStorage.removeItem('userName');
    this.router.navigate(['login']);
  }

}
