import { Component, EventEmitter, Inject, Optional, Output } from '@angular/core';
import { ProductIndexComponent } from '../../product-index/product-index/product-index.component';

@Component({
  selector: 'app-product-add-product',
  templateUrl: './product-add-product.component.html',
  styleUrl: './product-add-product.component.scss'
})
export class ProductAddProductComponent {


  constructor (@Optional() @Inject('closeDialog') public closeDialog: () => void){

  }

  onClose() {
    this.closeDialog();
  }
}
