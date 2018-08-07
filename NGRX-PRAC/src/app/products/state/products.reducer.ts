
import { Product } from '../product';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductActions, ProductActionTypes } from './products.actions';


// since the ProductModule is LazyLoaded
export interface State extends fromRoot.State {
    products: ProductState;

}

export interface ProductState {
    showProductCode: boolean;
    currentProduct: Product;
    products: Product[];
}
const initialState: ProductState = {
    showProductCode: true,
    currentProduct: null,
    products: []
};

// create selectors
const getProductFeatureState = createFeatureSelector<ProductState>('products');

// selector composed to return one boolean property
export const getShowProductCode = createSelector(
    getProductFeatureState,
    state => state.showProductCode
);

// selector for currentProduct
export const getCurrentProduct = createSelector(
    getProductFeatureState,
    state => state.currentProduct
);

// selector for the array of products
export const getProducts = createSelector(
    getProductFeatureState,
    state => state.products
);

export function reducer(state = initialState, action: ProductActions): ProductState {
    switch (action.type) {

        case ProductActionTypes.ToggleProductCode:

            console.log('The state value', JSON.stringify(state));
            return {
                ...state,
                showProductCode: action.payLoad
            };
        case ProductActionTypes.SetCurrentProduct:
        return {
            ...state,
            currentProduct: action.payLoad
        };

        case ProductActionTypes.ClearCurrentProduct:
        return {
            ...state,
            currentProduct: null
        };

        case ProductActionTypes.InitializeCurrentProduct:
        return {
            ...state,
            currentProduct: {
                id: 0,
                productName: '',
                productCode: 'New',
                description: '',
                starRating: 0
            }
        };

        default:
            return state;
    }
}
