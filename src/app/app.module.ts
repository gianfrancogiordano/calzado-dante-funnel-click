import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { JordanComponent } from './pages/jordan/jordan.component';
import { BotasMujerComponent } from './pages/botas-mujer/botas-mujer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagenPipe } from './pipes/imagen.pipe';
import { CartFormComponent } from './core/cart-form/cart-form.component';
import { FooterComponent } from './core/footer/footer.component';
import { BotasMujer3Component } from './pages/botas-mujer3/botas-mujer3.component';
import { BotasMujer2Component } from './pages/botas-mujer2/botas-mujer2.component';
import { BotasMujer1Component } from './pages/botas-mujer1/botas-mujer1.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    JordanComponent,
    BotasMujerComponent,
    ImagenPipe,
    CartFormComponent,
    FooterComponent,
    BotasMujer3Component,
    BotasMujer2Component,
    BotasMujer1Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
