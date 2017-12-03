import { ProductComponent } from './product/product.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { AppBootstrapModule } from './app-bootstrap.module';
import { ShopModule } from './shop/shop.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from './product/product.module';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/home', } // later naar een error pagina veranderen
];

@NgModule({
  imports: [
    BrowserModule,
    AppBootstrapModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HttpClientModule,
    // Feature modules
    ShopModule,
    HomeModule,
    ProductModule,
    
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
