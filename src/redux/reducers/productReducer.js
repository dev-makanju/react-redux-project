import { ActionTypes } from "../constants/action-types";

const initialState = {
   products: [],
};

export const productReducer = (state = initialState , { type , payload}) => {
   switch (type){
      case ActionTypes.SET_PRODUCTS:
         return { ...state , products: payload };
      default:
         return state;
   }
}

const productInit = {
   product: [],
}

export const selectedProductReducer = (state = productInit , { type , payload})  => {
    switch (type) {
      case ActionTypes.SELECTED_PRODUCT:
         return { ...state , product: payload } 
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
         return {};  
      default:
         return state   ;
    }
};