import { ProductState } from '../products/state/products.reducer';
import { UserState } from '../user/state/users.reducer';


export interface State {
   // products: ProductState; can't be kept here since it's lazy loaded
    user: UserState;
}
