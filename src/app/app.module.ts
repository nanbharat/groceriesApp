import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { ToggleMenuDirective } from './toggle-menu.directive';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { OpenProfileDirective } from './open-profile.directive';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { BrandedFoodsComponent } from './branded-foods/branded-foods.component';
import {MyHttpInterceptor} from './HttpInterceptor/HttpInterceptor';


@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      AdminComponent,
      HomeComponent,
      PageNotFoundComponent,
      RegistrationComponent,
      ToggleMenuDirective,
      LayoutComponent,
      FooterComponent,
      HeaderComponent,
      OpenProfileDirective,
      SidemenuComponent,
      BrandedFoodsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatButtonModule,
      MatIconModule,
      HttpClientModule
   ],
   providers: [
      { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
