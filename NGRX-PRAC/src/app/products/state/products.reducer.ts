export function reducer(state, action) {
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
