import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  // {path: 'register', component: ProductDetailsComponent},
  // {path: 'movements', component: SearchComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
