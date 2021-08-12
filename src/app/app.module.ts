import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BuyersService } from './core/services/buyers.service';
import { SellersService } from './core/services/sellers.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { SalesComponent } from './sales/sales.component';
import { UniformInterceptor } from './uniform.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    BuyersService, 
    SellersService,
    {provide: HTTP_INTERCEPTORS, useClass: UniformInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
