import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {AuthGuardService} from "./auth-guard.service";
import {ProductsListComponent} from "./products-list/products-list.component";
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {ReverseAuthGuardService} from "./reverse-auth-guard.service";

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [ReverseAuthGuardService] },
  { path: 'register', component: RegistrationComponent, canActivate: [ReverseAuthGuardService] },
  { path: 'products', component: ProductsListComponent, canActivate: [AuthGuardService] },
  { path: 'cart', component: ShoppingCartComponent, canActivate: [AuthGuardService] },
  { path: '', redirectTo: AuthGuardService ? '/products' : '/login', pathMatch: 'full'},
  { path: '**', redirectTo: AuthGuardService ? '/products' : '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
