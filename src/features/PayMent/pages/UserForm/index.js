import React, { useState } from 'react';
import { Alert, Box, Snackbar, TextField } from '@mui/material';
import Button from 'components/Button';
import { useDispatch, useSelector  } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { buyAllRequest } from 'features/Slice';
import { useStyles } from './styles';
import './styles.css';

export default function UserForm() {
  const classes = useStyles();
  const [buySuccess, setBuySuccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.listProduct);

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
    const orderside = cart.filter(item=>item.type)
    const ordercombo = cart.filter(item=>item.numberperson)
    const orderpizza = cart.filter(item=>item.size)
    console.log(orderside)
    console.log(ordercombo)
    console.log(orderpizza)
    let orderpizza1 = [];
    for (let item of orderpizza){
      orderpizza1.push({
        "order": 1,//
        "pizaa": item.pk,
        "pizzaa": item,
        "amount": item.quantity,
        "cost": item.cost,
      })
    }
    console.log(orderpizza1)

    let orderside1 = [];
    for (let item of orderside){
      orderside1.push({
        "order": 1,//
        "sidess": item.pk,
        "sidedis": item,
        "amount": item.quantity,
        "cost": item.cost,
      })
    }
    console.log(orderside1)
    let pizzaincombo= [];
    let sideincombo = [];
    let ordercombo1 = [];
    for (let item of ordercombo){
      for(let i of item.subProduct.filter(ite=>ite.size)){
        pizzaincombo.push({
          "pizza": i,
          "pizzacombo": i.pk,
        })
      }
      for(let i of item.subProduct.filter(ite=>ite.type)){
        sideincombo.push({
          "type": i.type,
          "sidedishes": i,
        })
      }
      ordercombo1.push({
        "amount": item.quantity,
        "order": 1,
        "combobox": item.pk,
        "comboinformation": {
          "pizzaincombo": pizzaincombo,
          "sideincombo": sideincombo,
        },
      })
    }
    console.log(pizzaincombo)
    console.log(sideincombo)
    console.log(ordercombo1)

    var dataPost = {
      // cart: "http://127.0.0.1:8000/cart/1/",
      name: dataToOrder.name,
      phonenumber: dataToOrder.phone,
      email: dataToOrder.email,
      address: dataToOrder.address,
      orderpizza: orderpizza1,
      orderside: orderside1,
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
