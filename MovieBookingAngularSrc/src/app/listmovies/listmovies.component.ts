import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listmovies',
  templateUrl: './listmovies.component.html',
  styleUrls: ['./listmovies.component.css']
})
export class ListmoviesComponent implements OnInit {


  username: string = "";
  responseBack : any; 
  search:string="";

  constructor(private router: Router, private httpRef : HttpClient, private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {

    this.username=localStorage.getItem('userName');

    let obs = this.httpRef.get("http://localhost:8081/movies");
      obs.subscribe((responseBack) => {
      this.responseBack = responseBack;
      console.log('responseBack: ');
      console.log(this.responseBack);
      console.log(responseBack[4].bannerPath);
      
      });
  }
 
  async searc(){
    
    this.router.navigate(['search', this.search]);
    await this.delay(1000);
    window.location.reload();

}

private delay(ms: number)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

  theatre(name){
    this.router.navigate(['theatreselect', name]);
  }

  logout(){
    localStorage.removeItem('userName');
    this.router.navigate(['login']);
  }
}
