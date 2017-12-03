import { ProductService } from './services/product.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductComponent
  ],
  providers: [ProductService]
})
export class ProductModule { }
