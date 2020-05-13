import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  responseBack : any; 
  response : any; 
  username : string="";
  search: string="";

  constructor(private router: Router, private httpRef : HttpClient, private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.username=localStorage.getItem('userName');

    let obs = this.httpRef.get("http://localhost:9080/tickets/last");
      obs.subscribe((responseBack) => {
        this.responseBack = responseBack;
        console.log(this.responseBack);
        let obs1 = this.httpRef.get("http://localhost:9080/ticket/" + this.responseBack);
        obs1.subscribe((response) => {
          this.response = response;
          console.log(response);
          });
        });

        this.getticket();
        console.log(this.response);
  }

  getticket(){
    
  }

  logout(){
    localStorage.removeItem('userName');
    this.router.navigate(['login']);
  }

  searc(){
    
    this.router.navigate(['search', this.search]);

}

}
