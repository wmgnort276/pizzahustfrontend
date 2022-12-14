import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const initialState = {
  listProduct: [],
  chooseProduct: {},
  loadingChoose: false,
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ChooseProduct: (state, action) => {
      state.chooseProduct = action.payload;
      state.loadingChoose = true;
    },

    BackBtnClick: (state) => {
      state.chooseProduct = {};
      state.loadingChoose = false;
    },

    SubBtnClick: (state, action) => {
      const idx = action.payload;
      if (state.listProduct[idx].quantity === 1) {
        state.listProduct.splice(idx, 1);
      } else if (state.listProduct[idx].quantity > 1) {
        state.listProduct[idx].quantity = state.listProduct[idx].quantity - 1;
      }
    },

    AddBtnClick: (state, action) => {
      const idx = action.payload;
      state.listProduct[idx].quantity = state.listProduct[idx].quantity + 1;
      state.chooseProduct = {};
      state.loadingChoose = false;
    },

    DelBtnClick: (state, action) => {
      const idx = action.payload;
      state.listProduct.splice(idx, 1);
    },

    addProduct: (state, action) => {
      const newProduct = action.payload;
      state.chooseProduct = {};
      state.loadingChoose = false;
      state.listProduct.push(newProduct);
    },

    addOldProduct: (state, action) => {
      const newProduct = {
        ...action.payload,
        id: v4(),
      };
      state.chooseProduct = {};
      state.loadingChoose = false;
      state.listProduct.push(newProduct);
    },

    buyAllRequest: (state) => {
      state.listProduct = [];
    },
  },
});

export const {
  addProduct,
  addOldProduct,
  ChooseProduct,
  AddBtnClick,
  SubBtnClick,
  DelBtnClick,
  BackBtnClick,
  buyAllRequest,
} = cart.actions;

export default cart.reducer;
