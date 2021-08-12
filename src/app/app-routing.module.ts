import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BuyersComponent } from './buyers/buyers.component';
import { SellersComponent } from './sellers/sellers.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { BuyerInfoComponent } from './buyer-info/buyer-info.component';
import { OrdersComponent } from './orders/orders.component';
import { SalesComponent } from './sales/sales.component';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'buyers', component: BuyersComponent},
  {
    path: 'buyers/:id', component: BuyerInfoComponent,
    children:[
      {
        path: 'orders', component: OrdersComponent
      }
    ] 
  },
  {path: 'sellers', component: SellersComponent},
  {
    path: 'sellers/:id', component: SellerInfoComponent,
    children:[
      {
        path: 'sales', component: SalesComponent
      }
    ] 
  },
  {path: "**", component: PagenotfoundComponent}
];
@NgModule({
  declarations: [
    BuyersComponent,
    SellersComponent,
    PagenotfoundComponent,
    DashboardComponent,
    SellerInfoComponent,
    BuyerInfoComponent
  ],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
