import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {AnonGuard, UserGuard, AdminGuard } from './guard.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { LandingComponent } from './landing/landing.component';
import { ReservationListComponent } from './reservation/reservation-list/reservation-list.component';
import { AttenteListComponent } from './attente/attente-list/attente-list.component';
import { ResultatListComponent } from './resultats/resultat-list/resultat-list.component';
import { QuizuComponent } from './user/quiz/quiz/quiz.component';
import { QuizComponent } from './quiz/quiz/quiz.component';
import { BookListComponent } from './user/books/book-list/book-list.component';
import { EventListComponent } from './user/events/event-list/event-list.component';
import { CourseListComponent } from './user/courses/course-list/course-list.component';
import { ReservationComponent } from './user/reservations/reservation/reservation.component';
import { ResultComponent } from './user/results/result/result.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';


const routes: Routes = [
  
    {
      path: '',
      redirectTo: 'landing',
      pathMatch: 'full'
    },
    {
      path: 'landing',
      component: LandingComponent
  
    },
    {
      path: 'login', component: LoginComponent,
      canActivate: [AnonGuard],
  
    },
    {
      path: 'register', component: RegisterComponent,
      canActivate: [AnonGuard],
    },
    {
      path: 'books',
      canActivate: [AdminGuard],
  
      loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
  
    },
    {
      path: 'events',
      canActivate: [AdminGuard],
  
      loadChildren: () => import('./events/events.module').then(m => m.EventsModule)
  
    },
    {
      path: 'courses',
      canActivate: [AdminGuard],
      loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  
    },
    {
      path: 'reservations', component: ReservationListComponent,
      canActivate: [AdminGuard],
  
    },
    {
      path: 'listeattente', component: AttenteListComponent,
      canActivate: [AdminGuard],
  
    },
    {
      path: 'resultats', component: ResultatListComponent,
      canActivate: [AdminGuard],
  
    },
    
    {
      path: 'profile', component: AdminProfileComponent,
      canActivate: [AdminGuard],
    },
    {
      path: 'my/profile', component: UserProfileComponent,
      canActivate: [UserGuard],
    },
    {
      path: 'course/:id/quiz', component: QuizComponent,
      canActivate: [AdminGuard],
  
    },
    {
      path: 'me/books', component: BookListComponent,
      canActivate: [UserGuard],
  
    },
    {
      path: 'me/events', component: EventListComponent,
      canActivate: [UserGuard],
  
    },
    {
      path: 'me/courses', component: CourseListComponent,
      canActivate: [UserGuard],
  
    },
    {
      path: 'me/reservations', component: ReservationComponent,
      canActivate: [UserGuard],
  
    },
    {
      path: 'me/results', component: ResultComponent,
      canActivate: [UserGuard],
  
    },{
      path: 'me/course/:id/quiz', component: QuizuComponent,
      canActivate: [UserGuard],
  
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
