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

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    JordanComponent,
    BotasMujerComponent,
    ImagenPipe
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
