import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginsuccessComponent } from './components/HomePage/loginsuccess.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ShowBookComponent } from './components/show-book/show-book.component';
import { DisplayComponent } from './components/display/display.component';
import { AppComponent } from './app.component';
// import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'homepage',
    component: LoginsuccessComponent,
    // canActivate: [authGuard]
  },
  { path: 'registration', component: RegistrationComponent },
  { path: 'showdetails', component: DisplayComponent },
  { path: 'bookshow', component: ShowBookComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
