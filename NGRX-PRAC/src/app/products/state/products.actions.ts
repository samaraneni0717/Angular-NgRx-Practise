import { Action } from '@ngrx/store';
import { Product } from '../product';

// Need enum to hold all the actions
export enum ProductActionTypes {
    ToggleProductCode = '[Product] Toggle product code',
    SetCurrentProduct = '[Product] Set current product',
    ClearCurrentProduct = '[Product] Clear current product',
    InitializeCurrentProduct = '[Product] Initialize current product',
    Load = '[Product] Load',
    LoadSuccess = '[Product] Load Success',
    LoadFailure = '[Product] Load Failure'

}

// action creators
export class ToggleProductCode implements Action {
    readonly type = ProductActionTypes.ToggleProductCode;
    constructor (public payLoad: boolean) {}
}

export class SetCurrentProduct implements Action {
    readonly type = ProductActionTypes.SetCurrentProduct;
    constructor (public payLoad: Product) {}

}

export class ClearCurrentProduct implements Action {
    readonly type = ProductActionTypes.ClearCurrentProduct;
    // no need for payLoad for this action
}

export class InitializeCurrentProduct implements Action {
    readonly type = ProductActionTypes.InitializeCurrentProduct;
}

export class Load implements Action {
    readonly type = ProductActionTypes.Load;
}

export class LoadSuccess implements Action {
    readonly type = ProductActionTypes.LoadSuccess;
    constructor (public payLoad: Product[]) {}
}

export class LoadFailure implements Action {
    readonly type = ProductActionTypes.LoadFailure;
    constructor (public payLoad: string) {}
}
// need to union all our action creators such that this can be used in the reducer to strongly type
// here we use pipe to unior the action creators or classes
export type ProductActions = ToggleProductCode |
SetCurrentProduct | ClearCurrentProduct | InitializeCurrentProduct | Load | LoadSuccess | LoadFailure;
