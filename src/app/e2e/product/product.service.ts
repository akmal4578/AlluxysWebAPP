import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = environment.apiBaseUrl+'/Product';
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError('Something went wrong; please try again later.');
  }

  getProducts(): Observable<any>{
    return this.http.get<any>(this.url)
      .pipe(catchError(this.handleError));
  }

  getProductById(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`)
      .pipe(catchError(this.handleError));
  }

  getActiveProducts():Observable<any>{
    return this.http.get<any>(this.url+'/GetActiveRefObjectState')
      .pipe(catchError(this.handleError));
  }

  // Get products by terminated state
  getTerminatedProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/GetTerminatedRefObjectState`)
      .pipe(catchError(this.handleError));
  }

  // Get products by name
  getProductsByName(name: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/GetByName/${name}`)
      .pipe(catchError(this.handleError));
  }

  // Search products by name keyword
  searchProductsByName(keyword: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/ContainsName/${keyword}`)
      .pipe(catchError(this.handleError));
  }
  
  // Search products by alias name keyword
  searchProductsByAliasName(keyword: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/ContainsAliasName/${keyword}`)
      .pipe(catchError(this.handleError));
  }

  // Search products by description keyword
  searchProductsByDescription(keyword: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/ContainsDescription/${keyword}`)
      .pipe(catchError(this.handleError));
  }

  // create 1 product
  createProduct(product: any, updater: string): Observable<any>{
    return this.http.post<any>(`${this.url}/${updater}`, product)
      .pipe(catchError(this.handleError));
  }

  // Create products in bulk
  createProducts(products: any[], updater: string): Observable<any> {
    return this.http.post<any>(`${this.url}/PostList/${updater}`, products)
      .pipe(catchError(this.handleError));
  }

  // Update a product
  updateProduct(product: any, updater: string): Observable<any> {
    return this.http.put<any>(`${this.url}/${updater}`, product)
      .pipe(catchError(this.handleError));
  }

  // Terminate a product
  terminateProduct(id: string, updater: string): Observable<any> {
    return this.http.put<any>(`${this.url}/Terminate/${id}/${updater}`, {})
      .pipe(catchError(this.handleError));
  }

  // Reactivate a product
  reactivateProduct(id: string, updater: string): Observable<any> {
    return this.http.put<any>(`${this.url}/Reactivate/${id}/${updater}`, {})
      .pipe(catchError(this.handleError));
  }

  // Delete a product
  deleteProduct(id: string, updater: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}/${updater}`)
      .pipe(catchError(this.handleError));
  }
}