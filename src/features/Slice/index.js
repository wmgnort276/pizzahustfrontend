import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const initialState = {
  listProduct: [],
  chooseProduct: {},
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ChooseProduct: (state, action) => {
      state.chooseProduct = action.payload;
    },

    BackBtnClick: (state) => {
      state.chooseProduct = {};
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
    },

    DelBtnClick: (state, action) => {
      const idx = action.payload;
      state.listProduct.splice(idx, 1);
    },

    addProduct: (state, action) => {
      const newProduct = action.payload;
      state.chooseProduct = {};
      state.listProduct.push(newProduct);
    },

    addOldProduct: (state, action) => {
      const newProduct = {
        ...action.payload,
        id: v4(),
      };
      state.chooseProduct = {};
      state.listProduct.push(newProduct);
    },

    buyAllRequest: (state) => {
      console.log(state)
      var dataPost = {
        "cart": "nam'",
        "name": "Lương An Nam",
        "phonenumber": "0886765594",
        "email": "0masteryourself0@gmail.com",
        "address": "Số 10, ngách 101/70, phố Thanh Nhàn, phường Quỳnh Lôi, quận Hai Bà Trưng",
        "orderpizza": [{
          "url": "http://127.0.0.1:8000/orderpiza/6/",
          "pk": 6,
          "order": "VuQuang",
          "pizaa": "http://127.0.0.1:8000/piza/4/",
          "amount": 5,
          "cost": 50000
      }],
        "orderside": [{
          "url": "http://127.0.0.1:8000/orderside/4/",
          "pk": 4,
          "order": "VuQuang",
          "sidess": "http://127.0.0.1:8000/side/2/",
          "amount": 1,
          "cost": 4534
      }],
        "ordercombo": [{
          "url": "http://127.0.0.1:8000/ordercombo/4/",
          "pk": 4,
          "order": "VuQuang",
          "combobox": "http://127.0.0.1:8000/combo/4/",
          "amount": 1,
          "cost": 460
      }],
        "delive": false,
      }
      var url_post = 'http://127.0.0.1:8000/order/';
      fetch(url_post, {
          method: 'POST', // thêm mới thì dùng post
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataPost), // chuyển dữ liệu object trên thành chuỗi json
      })
      .then((response) => response.json()) // chuyển kết quả trả về thành json object
      .then((data) => {

          // bạn có thể làm gì đó với kết quả cuối cùng này thì làm

          console.log('Success:', data); // ghi log kết quả hoàn thành
      })
      .catch((error) => {

          console.error('Error:', error); // ghi log nếu xảy ra lỗi
      });
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
