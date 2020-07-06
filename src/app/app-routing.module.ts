import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {anonguard,adminguard,userguard} from './guard.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path : '',
    redirectTo : '',
    pathMatch:'full'
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
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
