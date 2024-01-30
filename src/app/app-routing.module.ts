import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JordanComponent } from './pages/jordan/jordan.component';
import { BotasMujerComponent } from './pages/botas-mujer/botas-mujer.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/jordan', pathMatch: 'full' },
  { path: 'jordan', component: JordanComponent },
  { path: 'botas-mujer', component: BotasMujerComponent },
  { path: 'cart/:id', component: CartComponent },
  { path: '**', component: JordanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
