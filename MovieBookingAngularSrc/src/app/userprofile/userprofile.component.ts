import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  username: string = "";
  responseBack : any; 
  search:string="";

  constructor(private router: Router, private httpRef : HttpClient, private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.username=localStorage.getItem('userName');

    let obs = this.httpRef.get("http://localhost:8081/user/name/" + this.username);
      obs.subscribe((responseBack) => {
      this.responseBack = responseBack;
      console.log('responseBack: ');
      console.log(this.responseBack);
      
      });

    
  }

  
  logout(){
    localStorage.removeItem('userName');
    this.router.navigate(['login']);
  }

  searc(){
    
    this.router.navigate(['search', this.search]);

}

}
