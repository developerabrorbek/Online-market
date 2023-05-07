import { createSlice } from "@reduxjs/toolkit";

const basketState = {
  basketArr: JSON.parse(localStorage.getItem("basketArr")) || [],
  basketCartTotal: JSON.parse(localStorage.getItem("basketTotalCount")) ||  0,
  basketCartTotalAmount: JSON.parse(localStorage.getItem("basketTotalPrice")) ||  0,
};

const favoriteState = {
  favoriteArr: JSON.parse(localStorage.getItem("favoriteArr")) || [],
  favoriteCartTotal: 0,
};

export const basketSlice = createSlice({
  name: "basketArr",
  initialState: basketState,
  reducers: {
    addProduct: (state, action) => {
      const itemIndex = state.basketArr.findIndex(
        (item) => item.id == action.payload.id
      );
      if (itemIndex >= 0) {
        state.basketArr[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = {
          ...action.payload,
          cartQuantity: 1,
          productCount: 1,
        };
        state.basketArr.push(tempProduct);
        state.basketCartTotal += 1;
        localStorage.setItem("basketTotalCount", JSON.stringify(state.basketCartTotal))
        state.basketCartTotalAmount += action.payload.price;
        localStorage.setItem("basketTotalPrice", JSON.stringify(state.basketCartTotalAmount) )
        localStorage.setItem("basketArr", JSON.stringify(state.basketArr));
      }
    },
    removeProduct: (state, action) => {
      const itemIndex = state.basketArr.findIndex(
        (item) => item.id == action.payload.id
      );
      if (itemIndex >= 0) {
        state.basketArr.splice(itemIndex, 1);
        state.basketCartTotal -= 1;
        localStorage.setItem("basketTotalCount", JSON.stringify(state.basketCartTotal))
        state.basketCartTotalAmount -= action.payload.price;
        localStorage.setItem("basketTotalPrice", JSON.stringify(state.basketCartTotalAmount) )
        localStorage.setItem("basketArr", JSON.stringify(state.basketArr));
      }
      if(state.basketArr.length == 0) localStorage.setItem("basketTotalPrice", "0" )
    },
    increaseExtraProduct: (state, action) => {
      const itemIndex = state.basketArr.findIndex(
        (item) => item.id == action.payload.id
      );
      if (itemIndex >= 0) {
        state.basketArr[itemIndex].productCount += 1;
        state.basketCartTotalAmount += action.payload.price;
        localStorage.setItem("basketTotalPrice", JSON.stringify(state.basketCartTotalAmount) )
        localStorage.setItem("basketArr", JSON.stringify(state.basketArr));
      }
    },
    decreaseExtraProduct: (state, action) => {
      const itemIndex = state.basketArr.findIndex(
        (item) => item.id == action.payload.id
      );
      if (state.basketArr[itemIndex].productCount >= 2) {
        state.basketArr[itemIndex].productCount -= 1;
        state.basketCartTotalAmount -= action.payload.price;
        localStorage.setItem("basketTotalPrice", JSON.stringify(state.basketCartTotalAmount) )
        localStorage.setItem("basketArr", JSON.stringify(state.basketArr));
      }
    },
  },
});

export const {
  addProduct,
  removeProduct,
  increaseExtraProduct,
  decreaseExtraProduct,
} = basketSlice.actions;
export const basketReducer = basketSlice.reducer;

export const favoriteSlice = createSlice({
  name: "favoriteArr",
  initialState: favoriteState,
  reducers: {
    addFavoriteProduct: (state, action) => {
      const itemIndex = state.favoriteArr.findIndex(
        (item) => item.id == action.payload.id
      );
      if (itemIndex >= 0) {
        state.favoriteArr[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = {
          ...action.payload,
          cartQuantity: 1,
          productCount: 1,
        };
        state.favoriteArr.push(tempProduct);
        state.favoriteCartTotal += 1;
        localStorage.setItem("favoriteTotalCount", JSON.stringify(state.favoriteCartTotal))
        localStorage.setItem("favoriteArr", JSON.stringify(state.favoriteArr));
      }
    },
    removeFavoriteProduct: (state, action) => {
      const itemIndex = state.favoriteArr.findIndex(
        (item) => item.id == action.payload.id
      );
      if (itemIndex >= 0) {
        state.favoriteArr.splice(itemIndex, 1);
        state.favoriteCartTotal -= 1;
        localStorage.setItem("favoriteTotalCount", JSON.stringify(state.favoriteCartTotal))
        localStorage.setItem("favoriteArr", JSON.stringify(state.favoriteArr));
      }
    },
  },
});

export const { addFavoriteProduct, removeFavoriteProduct } =
  favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
