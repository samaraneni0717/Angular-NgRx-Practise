
import {Product} from '../product';
import * as fromRoot from '../../state/app.state';

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

export function reducer(state = initialState, action): ProductState {
    switch (action.type) {

        case 'TOGGLE_PRODUCT_CODE':

        console.log('The state value', JSON.stringify(state));
            return {
                ...state,
                showProductCode: action.payLoad
            };
        default:
        return state;
    }
}
