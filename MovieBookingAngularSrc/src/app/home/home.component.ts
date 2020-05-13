import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  responseBack: any;
  useremail: String = "";
  responseBack1: any;
  username: string = "";
  search: string = "";

  constructor(private router: Router, private httpRef: HttpClient, private _Activatedroute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.username = localStorage.getItem('userName');

    let obs1 = this.httpRef.get("http://localhost:8081/movies");
    obs1.subscribe((responseBack1) => {
      this.responseBack1 = responseBack1;
      console.log('responseBack1: ');
      console.log(this.responseBack1);
      console.log(responseBack1[4].bannerPath);

    });

  }


  searc() {

    this.router.navigate(['search', this.search]);

  }


  logout() {
    localStorage.removeItem('userName');
    this.router.navigate(['login']);
  }

  moviedetails(movie) {
    this.router.navigate(['moviedetails', movie]);

  }

}
