import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { UserComponent } from './user/user.component';
import { TheatreComponent } from './theatre/theatre.component';
import { HomeComponent } from './home/home.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { TheatreselectComponent } from './theatreselect/theatreselect.component';
import { SeatselectComponent } from './seatselect/seatselect.component';
import { TicketComponent } from './ticket/ticket.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OtpComponent } from './otp/otp.component';
import { ListmoviesComponent } from './listmovies/listmovies.component';
import { ListtheatreComponent } from './listtheatre/listtheatre.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path: "movie", component: MovieComponent},
  {path: "user", component: UserComponent},
  {path: "theatre", component: TheatreComponent},
  {path: "home", component: HomeComponent},
  {path: "moviedetails/:p1", component: MoviedetailsComponent},
  {path: "userprofile", component: UserprofileComponent},
  {path: "theatreselect/:p1", component:TheatreselectComponent},
  {path: "seatselect/:p1/:p2", component:SeatselectComponent},
  {path: "ticket", component:TicketComponent},
  {path: "login", component:LoginComponent},
  {path: "register", component:RegisterComponent},
  {path: "otp/:p1", component:OtpComponent},
  {path: "", component:RegisterComponent},
  {path: "listmovies", component:ListmoviesComponent},
  {path: "listtheatre", component:ListtheatreComponent},
  {path: "editprofile", component:EditprofileComponent},
  {path: "search/:p1", component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
