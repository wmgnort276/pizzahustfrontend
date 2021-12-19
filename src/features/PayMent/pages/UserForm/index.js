import React, { useState } from 'react';
import { Alert, Box, Snackbar, TextField } from '@mui/material';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { buyAllRequest } from 'features/Slice';
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

    // var dataPost = {
    //   cart: "nam'",
    //   name: 'Lương An Nam',
    //   phonenumber: '0886765594',
    //   email: '0masteryourself0@gmail.com',
    //   address:
    //     'Số 10, ngách 101/70, phố Thanh Nhàn, phường Quỳnh Lôi, quận Hai Bà Trưng',
    //   orderpizza: [
    //     {
    //       url: 'http://127.0.0.1:8000/orderpiza/6/',
    //       pk: 6,
    //       order: 'VuQuang',
    //       pizaa: 'http://127.0.0.1:8000/piza/4/',
    //       amount: 5,
    //       cost: 50000,
    //     },
    //   ],
    //   orderside: [
    //     {
    //       url: 'http://127.0.0.1:8000/orderside/4/',
    //       pk: 4,
    //       order: 'VuQuang',
    //       sidess: 'http://127.0.0.1:8000/side/2/',
    //       amount: 1,
    //       cost: 4534,
    //     },
    //   ],
    //   ordercombo: [
    //     {
    //       url: 'http://127.0.0.1:8000/ordercombo/4/',
    //       pk: 4,
    //       order: 'VuQuang',
    //       combobox: 'http://127.0.0.1:8000/combo/4/',
    //       amount: 1,
    //       cost: 460,
    //     },
    //   ],
    //   delive: false,
    // };
    // var url_post = 'http://127.0.0.1:8000/order/';
    // fetch(url_post, {
    //   method: 'POST', // thêm mới thì dùng post
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(dataPost), // chuyển dữ liệu object trên thành chuỗi json
    // })
    //   .then((response) => response.json()) // chuyển kết quả trả về thành json object
    //   .then((data) => {
    //     // bạn có thể làm gì đó với kết quả cuối cùng này thì làm

    //     console.log('Success:', data); // ghi log kết quả hoàn thành
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error); // ghi log nếu xảy ra lỗi
    //   });
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
