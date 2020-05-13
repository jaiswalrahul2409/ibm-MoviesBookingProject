import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  otp: string="";
  url : string="";
  responseBack:any;
  ootp: string="";

  constructor(private router: Router, private httpRef : HttpClient,  private _Activatedroute:ActivatedRoute) { 

  }

  displayMessage(val)
  {
    console.log(val);
  }

  otpnumber(){
  if(this.otp == this.ootp){
    this.router.navigate(['home']);
  }
}

  ngOnInit(): void {
    this.ootp=this._Activatedroute.snapshot.paramMap.get("p1");
  }

}
