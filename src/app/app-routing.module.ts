import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RegistrationComponent} from './registration/registration.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard  as AuthGard } from './auth.guard';
import {BrandedFoodsComponent} from './branded-foods/branded-foods.component'




const routes: Routes = [
  {path:'admin', component:AdminComponent, canActivate:[AuthGard]},
  {path:'registration', component:RegistrationComponent},
  {path:'login', component:LoginComponent},
  {path:'layout', component:LayoutComponent},
  {path:'BrandedFoods', component:BrandedFoodsComponent, canActivate:[AuthGard]},

  { path: '',   redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
