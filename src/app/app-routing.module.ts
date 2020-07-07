import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {anonguard,adminguard,userguard} from './guard.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { LandingComponent } from './landing/landing.component';
import { ReservationListComponent } from './reservation/reservation-list/reservation-list.component';
import { AttenteListComponent } from './attente/attente-list/attente-list.component';
import { ResultatListComponent } from './resultats/resultat-list/resultat-list.component';


const routes: Routes = [
  {
    path : '',
    redirectTo : 'landing',
    pathMatch:'full'
    },
    {
      path : 'landing',
      component : LandingComponent
      
    },
    {
      path : 'books',
      canActivate:[userguard],
      loadChildren:  () => import('./books/books.module').then(m => m.BooksModule)
      
    },
    {
      path : 'events',
      canActivate:[adminguard],
      loadChildren:  () => import('./events/events.module').then(m => m.EventsModule)
      
    },
    {
      path : 'courses',
      loadChildren:  () => import('./courses/courses.module').then(m => m.CoursesModule)
      
    },
    {
      path : 'login', component : LoginComponent  ,
      canActivate:[anonguard],
        
         
    },
    {
      path : 'register', component : RegisterComponent,
      canActivate:[anonguard],
    }
    ,
    {
      path : 'profile', component : UserProfileComponent,
      canActivate:[AuthGuard],
    },
    {
      path : 'reservations', component : ReservationListComponent,
     
    },
    {
      path : 'listeattente', component : AttenteListComponent,
     
    },
    {
      path : 'resultats', component : ResultatListComponent,
     
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
