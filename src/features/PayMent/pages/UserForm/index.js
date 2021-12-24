import React, { useState } from 'react';
import { Alert, Box, Snackbar, TextField } from '@mui/material';
import Button from 'components/Button';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of ef3f30f5 ([LTN] post order)
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector  } from 'react-redux';
import { buyAllRequest } from 'features/Slice';
<<<<<<< HEAD
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
=======
>>>>>>> parent of b5466dd8 (console.log(cart))
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { buyAllRequest } from 'features/Slice';
=======
>>>>>>> parent of ef3f30f5 ([LTN] post order)
import { useStyles } from './styles';
import './styles.css';

export default function UserForm() {
  const classes = useStyles();
  const [buySuccess, setBuySuccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleBuyBtn(event) {
    event.preventDefault();
    dispatch(buyAllRequest());
    setBuySuccess(true);
    const data = new FormData(event.currentTarget);
    const dataToOrder = {
      name: data.get('Name'),
      phone: data.get('Phone'),
      email: data.get('Email'),
      address: data.get('Address'),
    };
    console.log('data to order', dataToOrder);
<<<<<<< HEAD
    console.log('cart ', cart);
    const orderside = cart.filter(item=>item.type)
    const ordercombo = cart.filter(item=>item.numberperson)
    const orderpizza = cart.filter(item=>item.size)
    console.log(orderside)
    console.log(ordercombo)
    console.log(orderpizza)
    let orderpizza1 = [];
    for (let item of orderpizza){
      orderpizza1.push({
        "url": "http://127.0.0.1:8000/orderpiza/1/",
        "pk": 1,
        "order": 1,
        "pizaa": item.pk,
        "pizzaa": item,
        "amount": 1,
        "cost": 160000,
      })
    }
    console.log(orderpizza1)

    let orderside1 = [];
    for (let item of orderside){
      orderside1.push({
        "url": "http://127.0.0.1:8000/orderside/1/",
        "pk": 1,
        "order": "http://127.0.0.1:8000/order/1/",
        "sidess": item.pk,
        "sidedis": item,
        "amount": 1,
        "cost": 160000,
      })
    }
    console.log(orderside1)
    let pizzaincombo= [];
    let sideincombo = [];
    let ordercombo1 = [];
    for (let item of ordercombo){
      for(let i of item.subProduct.filter(ite=>ite.size)){
        pizzaincombo.push({
          "url": "http://127.0.0.1:8000/pizaincombo/1/",
          "pk": 1,
          "combo": "combo Đào",
          "pizzacombo": 2,
          "pizza": i,
        })
      }
      for(let i of item.subProduct.filter(ite=>ite.type)){
        sideincombo.push({
          "url": "http://127.0.0.1:8000/sideincombo/1/",
          "combo": "combo Đào",
          "pk": 1,
          "sidecombo": 1,
          "type": i.type,
          "sidedishes": i,
        })
      }
      ordercombo1.push({
        "url": "http://127.0.0.1:8000/ordercombo/1/",
        "pk": 1,
        "order": "Lương Thái Nam1",
        "combobox": 1,
        "comboinformation": {
          "url": "http://127.0.0.1:8000/combo/1/",
          "name": item.name,
          "time": item.time,
          "pk": 1,
          "numberperson": item.numberperson,
          "cost": 460000,
          "image": "http://127.0.0.1:8000/media/combo/0002884_combo-gia-chat-209k_300.png",
          "percent": 10,
          "description": "Tôm, cua, giăm bông,... với sốt Thousand Island",
          "menu": "Appetizer",
          "pizzaincombo": pizzaincombo,
          "sideincombo": sideincombo,
          "price_field": 350100,
          "current_sides_fields": [],
          "score_fields": 5.0
        },
        "amount": 1,
        "cost": 160000,
      })
    }
    console.log(pizzaincombo)
    console.log(sideincombo)
    console.log(ordercombo1)
=======
>>>>>>> parent of b5466dd8 (console.log(cart))

    var dataPost = {
      // cart: "http://127.0.0.1:8000/cart/1/",
      name: dataToOrder.name,
      phonenumber: dataToOrder.phone,
      email: dataToOrder.email,
      address: dataToOrder.address,
      // orderpizza: [
        // {
        //   "url": "http://127.0.0.1:8000/orderpiza/1/",
        //   "pk": 1,
        //   "order": 1,
        //   "pizaa": 1,
        //   "pizzaa": {
        //       "url": "http://127.0.0.1:8000/piza/1/",
        //       "cost": 150000,
        //       "name": "Pizza Hải Sản Đào",
        //       "size": "S",
        //       "pk": 1,
        //       "image": "http://127.0.0.1:8000/media/pizza/0002930_pizza-4-cheese_300.png",
        //       "description": "Tôm, cua, mực và bông cải xanh tươi ngon trên nền sốt Pesto Xanh",
        //       "menu": "Appetizer",
        //       "topping_amounts": [],
        //       "score_fields": 5.0
        //   },
        //   "amount": 1,
        //   "cost": 150000
        // }
      // ],
      orderpizza: orderpizza1,
      // orderside: [
        // {
        //   "url": "http://127.0.0.1:8000/orderside/1/",
        //   "pk": 1,
        //   "order": "http://127.0.0.1:8000/order/1/",
        //   "sidess": 3,
        //   "sidedis": {
        //       "url": "http://127.0.0.1:8000/side/3/",
        //       "name": "Mỳ hải sản",
        //       "pk": 3,
        //       "cost": 160000,
        //       "image": "http://127.0.0.1:8000/media/sidedishes/0002254_spicy-sausage-spaghetti_300.png",
        //       "description": "Tôm, cua, giăm bông,... với sốt Thousand Island",
        //       "type": "Noodle",
        //       "menu": "Appetizer",
        //       "score_fields": 5.0
        //   },
        //   "amount": 1,
        //   "cost": 100000
        // }
      // ],
      orderside: orderside1,
      // ordercombo: [
        // {
        //   "url": "http://127.0.0.1:8000/ordercombo/1/",
        //   "pk": 1,
        //   "order": "Lương Thái Nam1",
        //   "combobox": 1,
        //   "comboinformation": {
        //       "url": "http://127.0.0.1:8000/combo/1/",
        //       "name": "combo Đào",
        //       "time": "2021-12-22T15:39:24Z",
        //       "pk": 1,
        //       "numberperson": 2,
        //       "cost": 460000,
        //       "image": "http://127.0.0.1:8000/media/combo/0002884_combo-gia-chat-209k_300.png",
        //       "percent": 10,
        //       "description": "Tôm, cua, giăm bông,... với sốt Thousand Island",
        //       "menu": "Appetizer",
        //       "pizzaincombo": [
        //           {
        //               "url": "http://127.0.0.1:8000/pizaincombo/1/",
        //               "pk": 1,
        //               "combo": "combo Đào",
        //               "pizzacombo": 2,
        //               "pizza": {
        //                   "url": "http://127.0.0.1:8000/piza/2/",
        //                   "cost": 130000,
        //                   "name": "Pizza Hải Sản Pesto Xanh",
        //                   "size": "S",
        //                   "pk": 2,
        //                   "image": "http://127.0.0.1:8000/media/pizza/0002929_pepperoni-g4-cheese_300.png",
        //                   "description": "Tôm, cua, mực và nghêu với sốt Marinara",
        //                   "menu": "Main",
        //                   "topping_amounts": [],
        //                   "score_fields": 5.0
        //               }
        //           },
        //           {
        //               "url": "http://127.0.0.1:8000/pizaincombo/2/",
        //               "pk": 2,
        //               "combo": "combo Đào",
        //               "pizzacombo": 3,
        //               "pizza": {
        //                   "url": "http://127.0.0.1:8000/piza/3/",
        //                   "cost": 140000,
        //                   "name": "Pizza Hải Sản Cocktail",
        //                   "size": "S",
        //                   "pk": 3,
        //                   "image": "http://127.0.0.1:8000/media/pizza/0002705_seafood-peach_300.png",
        //                   "description": "Tôm với nấm, dứa, cà chua và sốt Thousand Island.",
        //                   "menu": "Vegetarian",
        //                   "topping_amounts": [],
        //                   "score_fields": 5.0
        //               }
        //           }
        //       ],
        //       "sideincombo": [
        //           {
        //               "url": "http://127.0.0.1:8000/sideincombo/1/",
        //               "combo": "combo Đào",
        //               "pk": 1,
        //               "sidecombo": 1,
        //               "sidedishes": {
        //                   "url": "http://127.0.0.1:8000/side/1/",
        //                   "name": "Mỳ Ý",
        //                   "pk": 1,
        //                   "cost": 50000,
        //                   "image": "http://127.0.0.1:8000/media/sidedishes/0002257_spaghetti-shrimp-rose_300.png",
        //                   "description": "Tôm, nghêu, mực cua, dứa với sốt Thousand Island",
        //                   "type": "Noodle",
        //                   "menu": "Appetizer",
        //                   "score_fields": 5.0
        //               },
        //               "type": "Noodle",
        //               // "sides": [
        //               //     {
        //               //         "url": "http://127.0.0.1:8000/side/1/",
        //               //         "name": "Mỳ Ý",
        //               //         "pk": 1,
        //               //         "cost": 50000,
        //               //         "image": "http://127.0.0.1:8000/media/sidedishes/0002257_spaghetti-shrimp-rose_300.png",
        //               //         "description": "Tôm, nghêu, mực cua, dứa với sốt Thousand Island",
        //               //         "type": "Noodle",
        //               //         "menu": "Appetizer",
        //               //         "score_fields": 5.0
        //               //     },
        //               //     {
        //               //         "url": "http://127.0.0.1:8000/side/2/",
        //               //         "name": "Mỳ cay",
        //               //         "pk": 2,
        //               //         "cost": 160000,
        //               //         "image": "http://127.0.0.1:8000/media/sidedishes/0002258_spaghetti-bolognese_300.png",
        //               //         "description": "Tôm, nghêu, mực cua, dứa với sốt Thousand Island",
        //               //         "type": "Noodle",
        //               //         "menu": "Appetizer",
        //               //         "score_fields": 5.0
        //               //     },
        //               //     {
        //               //         "url": "http://127.0.0.1:8000/side/3/",
        //               //         "name": "Mỳ hải sản",
        //               //         "pk": 3,
        //               //         "cost": 160000,
        //               //         "image": "http://127.0.0.1:8000/media/sidedishes/0002254_spicy-sausage-spaghetti_300.png",
        //               //         "description": "Tôm, cua, giăm bông,... với sốt Thousand Island",
        //               //         "type": "Noodle",
        //               //         "menu": "Appetizer",
        //               //         "score_fields": 5.0
        //               //     }
        //               // ]
        //           },
        //           {
        //               "url": "http://127.0.0.1:8000/sideincombo/2/",
        //               "combo": "combo Đào",
        //               "pk": 2,
        //               "sidecombo": 4,
        //               "sidedishes": {
        //                   "url": "http://127.0.0.1:8000/side/4/",
        //                   "name": "Salad Da Cá Hồi Giòn",
        //                   "pk": 4,
        //                   "cost": 69000,
        //                   "image": "http://127.0.0.1:8000/media/sidedishes/0002601_crispy-salmon-skin-salad_300.png",
        //                   "description": "Tôm, nghêu, mực cua, dứa với sốt Thousand Island",
        //                   "type": "SideDishes",
        //                   "menu": "Vegetarian",
        //                   "score_fields": 5.0
        //               },
        //               "type": "SideDishes",
        //               // "sides": [
        //               //     {
        //               //         "url": "http://127.0.0.1:8000/side/4/",
        //               //         "name": "Salad Da Cá Hồi Giòn",
        //               //         "pk": 4,
        //               //         "cost": 69000,
        //               //         "image": "http://127.0.0.1:8000/media/sidedishes/0002601_crispy-salmon-skin-salad_300.png",
        //               //         "description": "Tôm, nghêu, mực cua, dứa với sốt Thousand Island",
        //               //         "type": "SideDishes",
        //               //         "menu": "Vegetarian",
        //               //         "score_fields": 5.0
        //               //     }
        //               // ]
        //           }
        //       ],
        //       // "pizzas": [
        //       //     {
        //       //         "url": "http://127.0.0.1:8000/piza/2/",
        //       //         "cost": 130000,
        //       //         "name": "Pizza Hải Sản Pesto Xanh",
        //       //         "size": "S",
        //       //         "pk": 2,
        //       //         "image": "http://127.0.0.1:8000/media/pizza/0002929_pepperoni-g4-cheese_300.png",
        //       //         "description": "Tôm, cua, mực và nghêu với sốt Marinara",
        //       //         "menu": "Main",
        //       //         "topping_amounts": [],
        //       //         "score_fields": 5.0
        //       //     },
        //       //     {
        //       //         "url": "http://127.0.0.1:8000/piza/3/",
        //       //         "cost": 140000,
        //       //         "name": "Pizza Hải Sản Cocktail",
        //       //         "size": "S",
        //       //         "pk": 3,
        //       //         "image": "http://127.0.0.1:8000/media/pizza/0002705_seafood-peach_300.png",
        //       //         "description": "Tôm với nấm, dứa, cà chua và sốt Thousand Island.",
        //       //         "menu": "Vegetarian",
        //       //         "topping_amounts": [],
        //       //         "score_fields": 5.0
        //       //     }
        //       // ],
        //       "price_field": 350100,
        //       "current_sides_fields": [],
        //       "score_fields": 5.0
        //   },
        //   "amount": 1,
        //   "cost": 500000
        // }
      // ],
      ordercombo: ordercombo1,
      delive: false,
      cost_fields: 670100,
    };
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
    setTimeout(() => {
      navigate('/success', { replace: true });
    }, 1000);
  }

  function handleClose() {
    setBuySuccess(false);
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.logo}>
        <img
          srcSet={process.env.PUBLIC_URL + 'pizzaLogo.png 2x'}
          alt=""
          style={{ marginLeft: 'auto', display: 'block' }}
        />
      </Box>
      <Box
        component="form"
        className={classes.userForm}
        onSubmit={handleBuyBtn}
      >
        <span>Thông tin thanh toán</span>
        <Box className={classes.userForm}>
          <TextField
            margin="normal"
            autoFocus
            required
            fullWidth
            id="name"
            placeholder="Họ và tên"
            name="Name"
            sx={{ mt: 2, mb: 2 }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            placeholder="Số điện thoại"
            name="Phone"
            sx={{ mt: 2, mb: 2 }}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            type="email"
            id="email"
            placeholder="Email"
            name="Email"
            sx={{ mt: 2, mb: 2 }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="address"
            placeholder="Địa chỉ"
            name="Address"
            sx={{ mt: 2, mb: 2 }}
          />
        </Box>
        <Button type="submit" name="Mua hàng" />
      </Box>
      <Snackbar
        open={buySuccess}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Buy Successfull! Thank you!
        </Alert>
      </Snackbar>
    </Box>
  );
}
