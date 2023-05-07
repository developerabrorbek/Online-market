import { createSlice } from "@reduxjs/toolkit";

const basketState = {
  basketArr: JSON.parse(localStorage.getItem("basketArr")) || [],
  basketCartTotal : 0,
  basketCartTotalAmount: 0,
};

const favoriteState = {
  favoriteArr: JSON.parse(localStorage.getItem("favoriteArr")) || [],
  favoriteCartTotal : 0,
  favoriteCartTotalAmount: 0,
};

export const basketSlice = createSlice({
  name: "basketArr",
  initialState: basketState,
  reducers: {
    addProduct: (state, action) => {
      const itemIndex = state.basketArr.findIndex(item => item.id == action.payload.id);
      if(itemIndex >= 0){
        state.basketArr[itemIndex].cartQuantity += 1;
      }else{
        const tempProduct = {...action.payload, cartQuantity: 1};
        state.basketArr.push(tempProduct);
        localStorage.setItem("basketArr",JSON.stringify(state.basketArr))
      }
    },
    removeProduct: (state, action) => {
      const itemIndex = state.basketArr.findIndex(item => item.id == action.payload.id);
      if(itemIndex >= 0){
        console.log(itemIndex);
        state.basketArr.splice(itemIndex,1)
        localStorage.setItem("basketArr",JSON.stringify(state.basketArr))
      }
    },
  },
});

export const { addProduct, removeProduct } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;

export const favoriteSlice = createSlice({
  name: "favoriteArr",
  initialState: favoriteState,
  reducers: {
    addFavoriteProduct: (state, action) => {
      const itemIndex = state.favoriteArr.findIndex(item => item.id == action.payload.id);
      if(itemIndex >= 0){
        state.favoriteArr[itemIndex].cartQuantity += 1;
      }else{
        const tempProduct = {...action.payload, cartQuantity: 1};
        state.favoriteArr.push(tempProduct);
        localStorage.setItem("favoriteArr",JSON.stringify(state.favoriteArr))

      }
    },
    removeFavoriteProduct: (state, action) => {
      const itemIndex = state.favoriteArr.findIndex(item => item.id == action.payload.id);
      if(itemIndex >= 0){
        state.favoriteArr.splice(itemIndex,1)
        localStorage.setItem("favoriteArr",JSON.stringify(state.favoriteArr))
      }
    },
  },
});

export const { addFavoriteProduct, removeFavoriteProduct } =
  favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
