import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
import { HomeadminComponent } from '../homeadmin/homeadmin.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {   path : '', 
      redirectTo:'/signin', 
      pathMatch : 'full'
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeadminComponent
  },
  {
      path: 'signin', 
      component: SigninComponent      
  },
  {
      path: 'signup', 
      component: SignupComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutesModule { }
