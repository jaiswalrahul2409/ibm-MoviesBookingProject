import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-seatselect',
  templateUrl: './seatselect.component.html',
  styleUrls: ['./seatselect.component.css'],
  providers: [DatePipe]
})
export class SeatselectComponent implements OnInit {

  mname: string = "";
  tname: string = "";
  seats: string = "";
  count: number = 0;
  myDate = new Date();
  price : number = 0;
  username: string="";
  search:string="";


  constructor(private router: Router, private httpRef: HttpClient, private _Activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.mname = this._Activatedroute.snapshot.paramMap.get("p1");
    this.tname = this._Activatedroute.snapshot.paramMap.get("p2");
    this.username = localStorage.getItem('userName');
    console.log(this.mname);
    console.log(this.tname);
    console.log(this.username);
  }

  seatsele(name) {
    this.seats = this.seats.concat(", " + name);
    console.log(this.seats);
    this.count++;
    this.price+=150;
  }

  savetransaction() { 
    let obs = this.httpRef.post("http://localhost:9080/ticket/create",
      {
        "noOfTickets": this.count,
        "date": this.myDate,
        "time": this.myDate.getHours() + ":" + this.myDate.getMinutes() + ":" + this.myDate.getSeconds(),
        "theatre": this.tname,
        "movie": this.mname,
        "userName": this.username,
        "seats": this.seats,
        "price": this.price
      })
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);

        },
        error => {
          console.log("Error", error);
        }
      );
      alert("No. of seats selected: " + this.count + "\nPrice to be paid: " + this.price);

      window.location.href = 'http://localhost:8080';

  }

  searc(){
    
    this.router.navigate(['search', this.search]);

}

  logout(){
    localStorage.removeItem('userName');
    this.router.navigate(['login']);
  }



}
