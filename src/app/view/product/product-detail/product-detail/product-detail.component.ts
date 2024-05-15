import { Component, Input, OnInit } from '@angular/core';
import { product } from '../../../../../model/product';
import { Router } from '@angular/router';
import { ProductService } from '../../../../e2e/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit{

  idProduct: any;
  constructor(private router: Router, private service : ProductService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state?.['idProduct']) {
      this.idProduct = navigation.extras.state['idProduct'];
    }
  }

  product: product | undefined;

  ngOnInit(): void {
    this.getProductById(this.idProduct);
  }

  getProductById(id: any): void{
    this.service.getProductById(id).subscribe({
      next:(res)=>{
        this.product= res;
      }
    });
  }

  back(){
    this.router.navigate(['/productIndex']);
  }
}
