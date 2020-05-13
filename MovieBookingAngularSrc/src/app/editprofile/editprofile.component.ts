import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  username: string = "";
  responseBack : any; 
  fname: string = "";
  lname: string = "";
  uemail: string = "";
  upass: string = "";
  unum: string = "";
  ugend: string = "";
  ucity: string = "";
  userid: string="";
  search: string="";

  constructor(private router: Router, private httpRef : HttpClient, private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {

    this.username=localStorage.getItem('userName');



  }


  update(){

    let obs = this.httpRef.post("http://localhost:8081/users/create",
    {
      "userId": this.userid,
      "firstName": this.fname,
      "lastName": this.lname,
      "email": this.uemail,
      "password": this.upass,
      "phoneNumber": this.unum,
      "gender": this.ugend,
      "city": this.ucity
    })
    .subscribe(
    data  => {
      alert("User updated Successfully");
    console.log("POST Request is successful ", data);
    
    },
    error  => {
    console.log("Error", error);
    }
    );
    
  }


searc(){
    this.router.navigate(['search', this.search]);
}



  logout(){
    localStorage.removeItem('userName');
    this.router.navigate(['login']);
  }

}
