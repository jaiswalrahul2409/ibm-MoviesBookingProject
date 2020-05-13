import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MovieComponent } from './movie/movie.component';
import { TheatreComponent } from './theatre/theatre.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { TheatreselectComponent } from './theatreselect/theatreselect.component';
import { SeatselectComponent } from './seatselect/seatselect.component';
import { TicketComponent } from './ticket/ticket.component';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { RegisterComponent } from './register/register.component';
import { ListmoviesComponent } from './listmovies/listmovies.component';
import { ListtheatreComponent } from './listtheatre/listtheatre.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MovieComponent,
    TheatreComponent,
    HomeComponent,
    UserprofileComponent,
    MoviedetailsComponent,
    TheatreselectComponent,
    SeatselectComponent,
    TicketComponent,
    LoginComponent,
    OtpComponent,
    RegisterComponent,
    ListmoviesComponent,
    ListtheatreComponent,
    EditprofileComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
