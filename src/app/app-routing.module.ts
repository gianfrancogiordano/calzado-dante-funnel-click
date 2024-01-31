import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JordanComponent } from './pages/jordan/jordan.component';
import { BotasMujerComponent } from './pages/botas-mujer/botas-mujer.component';
import { CartComponent } from './cart/cart.component';
import { BotasMujer3Component } from './pages/botas-mujer3/botas-mujer3.component';
import { BotasMujer2Component } from './pages/botas-mujer2/botas-mujer2.component';
import { BotasMujer1Component } from './pages/botas-mujer1/botas-mujer1.component';

const routes: Routes = [
  { path: '', redirectTo: '/botas-jordan-hombre', pathMatch: 'full' },
  { path: 'botas-jordan-hombre', component: JordanComponent },
  { path: 'botas-mujer', component: BotasMujerComponent },
  { path: 'botas-mujer-3', component: BotasMujer3Component },
  { path: 'botas-mujer-2', component: BotasMujer2Component },
  { path: 'botas-mujer-1', component: BotasMujer1Component },
  { path: 'cart/:id', component: CartComponent },
  { path: '**', component: JordanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
