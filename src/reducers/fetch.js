const initialState = {
  pending: false,
  products: [],
  error: null,
};

const fetch = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_PENDING":
      return {
        ...state,
        pending: true,
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        pending: false,
        products: action.payload,
      };
    case "FETCH_PRODUCTS_ERROR":
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default fetch;

export const getProducts = (state) => state.products;
export const getProductsPending = (state) => state.pending;
export const getProductsError = (state) => state.error;
