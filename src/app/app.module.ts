import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserService } from './shared/user.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { LandingComponent } from './landing/landing.component';
import { AttenteListComponent } from './attente/attente-list/attente-list.component';
import { ReservationListComponent } from './reservation/reservation-list/reservation-list.component';
import { EventListComponent } from './user/events/event-list/event-list.component';
import { BookListComponent } from './user/books/book-list/book-list.component';
import { CourseListComponent } from './user/courses/course-list/course-list.component';
import { ResultatListComponent } from './resultats/resultat-list/resultat-list.component';
import { QuizComponent } from './quiz/quiz/quiz.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    LandingComponent,
    AttenteListComponent,
    ReservationListComponent,
    EventListComponent,
    BookListComponent,
    CourseListComponent,
    ResultatListComponent,
    QuizComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService,AuthGuard,{
    provide: HTTP_INTERCEPTORS ,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }


