import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
     path:'about',
     component:AboutComponent
  },
  {
     path:'login',
     component:LoginComponent
  },
  {
     path:'',
     component:HomeComponent
  },
  {
    path:'user/:id',
    component:UserComponent
 },
 {
   path:'**',
   component:ErrorpageComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
