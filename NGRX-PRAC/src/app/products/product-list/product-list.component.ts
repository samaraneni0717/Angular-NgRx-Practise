import { Component, OnInit, OnDestroy } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';

// NgRx
import {Store, select} from '@ngrx/store';
import * as fromProduct from '../state/products.reducer';
import * as productActions from '../state/products.actions';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode: boolean;

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;


  constructor(private productService: ProductService, private store: Store<any>) { }

  ngOnInit(): void {
    // this.sub = this.productService.selectedProductChanges$.subscribe(
    //   selectedProduct => this.selectedProduct = selectedProduct
    // );

    // ngRx way
    this.store.pipe(select(fromProduct.getCurrentProduct)).subscribe(item => {
      this.selectedProduct = item;
    });

    // this.productService.getProducts().subscribe(
    //   (products: Product[]) => this.products = products,
    //   (err: any) => this.errorMessage = err.error
    // );
    this.store.dispatch(new productActions.Load());
    this.store.pipe(select(fromProduct.getProducts)).subscribe(data => {
      this.products = data;
    });

    this.store.pipe(select(fromProduct.getProducts)).subscribe(items => {
      this.products = items;
    });


    // Pipe operator allows to transform the emitted state
    // TODO: Unsubscribe
    // this.store.pipe(select('products')).subscribe((data) => {
    //   console.log('state update', data);
    //   if (data) {
    //     this.displayCode = data.showProductCode;
    //   }

    // });
    this.store.pipe(select(fromProduct.getShowProductCode)).subscribe((showProductCode) => {
        this.displayCode = showProductCode;
    });
  }

  ngOnDestroy(): void {

  }

  checkChanged(value: boolean): void {
    // this.displayCode = value;
    // this.store.dispatch({
    //   type: 'TOGGLE_PRODUCT_CODE',
    //   payLoad: value
    // });

    // instead of object literal we will be passing the object instance
    // this way we leverage the strongly typed actions and minimize the errors
    this.store.dispatch(new productActions.ToggleProductCode(value));
  }

  newProduct(): void {
   // this.productService.changeSelectedProduct(this.productService.newProduct());
   this.store.dispatch(new productActions.InitializeCurrentProduct);
  }

  productSelected(product: Product): void {
   // this.productService.changeSelectedProduct(product);
   // the ngRx way
   this.store.dispatch(new productActions.SetCurrentProduct(product));
  }

}
