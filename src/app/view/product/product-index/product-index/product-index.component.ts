import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router'; 
import { ProductService } from '../../../../e2e/product/product.service';
import { product } from '../../../../../model/product';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrl: './product-index.component.scss'
})
export class ProductIndexComponent implements OnInit{

  constructor(
    private router: Router,private service: ProductService) {
  }
  
  dataSource: product[] = [];
  displayedColumns: string[] = ['name', 'aliasName', 'description'];
  errorMessage: string = '';

  ngOnInit(): void {
    this.getActiveProduct();
    // this.getProductByID("8beca0a3-dde0-4af4-9197-c669a2ba754f");
    // this.getActiveProducts();
  }

  selectedProduct : any;  
  movePage( data : any ): void{
    this.selectedProduct = data;
    this.router.navigate(['/productDetail'], { state: {idProduct: data.idProduct } });
  }
  

  getActiveProduct():void{
    this.service.getActiveProducts().subscribe({
      next: (res) => {
        this.dataSource = res;
        // header title - if want to define can use displayedColumns
        // this.displayedColumns = Object.keys( this.dataSource[0] );
      },
      error: (err) => this.errorMessage = err
    });
  }

  // getProductByID(id:any): void {
  //   this.service.getProductById(id).subscribe({
  //     next:(res)=>{
  //       console.log("data By ID", res);
  //     }
  //   });
  // }

  // get all product that are active => GetActiveRefObjectState
  // getActiveProducts():void {
  //   this.service.getActiveProducts().subscribe({
  //     next: (res) =>{
  //       this.products =res;
  //       console.log("data active", res);
  //     },
  //     error: (err) => this.errorMessage = err
  //   });
  // }
}