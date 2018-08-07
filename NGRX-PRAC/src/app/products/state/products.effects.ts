import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from '../product.service';
import * as productActions from '../state/products.actions';
import { mergeMap, map } from 'rxjs/operators';
import { Product } from '../product';

@Injectable()
export class ProductsEffects {

    // actions hold all the dispatched actions in the application
    constructor(private actions$: Actions, private productService: ProductService) {}

    // register and load effects
    @Effect()
    loadProduct$ = this.actions$.pipe(
        ofType(productActions.ProductActionTypes.Load),
        mergeMap((action: productActions.Load) =>
           this.productService.getProducts().pipe( map((products: Product[]) =>
           (new productActions.LoadSuccess(products))))));

}
