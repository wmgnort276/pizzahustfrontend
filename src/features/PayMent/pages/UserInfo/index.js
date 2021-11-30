import React, { useState } from 'react';
import { Alert, Box, Snackbar, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { buyAllRequest } from 'features/Slice';

const useStyles = makeStyles({
  root: {
    padding: '12px 28px 34px 32px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#fff',
  },

  userInfo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',

    '& span': {
      fontSize: '18px',
      lineHeight: 22 / 18,
      fontWeight: 700,
    },
  },

  userForm: {
    margin: '30px 0 0 0',
    flex: 1,
    '& .MuiInputBase-root': {
      borderRadius: '8px',
      borderColor: '#ff8000',
      '&:hover': {
        borderColor: '#ff8000',
      },
    },
    '& .MuiFormLabel-root': {
      // color: "#ff8000"
    },
    '& .MuiFormLabel-filled': {
      // color: "#ff8000"
      borderColor: '#ff8000',
    },
    '& .css-1kty9di-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
      color: '#ff8000',
    },
    '& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused:hover .MuiOutlinedInput-notchedOutline':
      {
        borderColor: '#ff8000',
      },
    '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
      // borderColor: '#ff8000',
    },
  },
});

export default function UserInfo() {
  const classes = useStyles();
  const [buySuccess, setBuySuccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleBuyBtn(event) {
    event.preventDefault();
    dispatch(buyAllRequest());
    setBuySuccess(true);
    setTimeout(() => {
      navigate('/', { replace: true });
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
        className={classes.userInfo}
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
            label="Họ và tên"
            name="Name"
            sx={{ mt: 2, mb: 2 }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Số điện thoại"
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
            label="Email"
            name="Email"
            sx={{ mt: 2, mb: 2 }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="address"
            label="Địa chỉ"
            name="Address"
            sx={{ mt: 2, mb: 2 }}
          />
        </Box>
        <Button type="submit" name={'Mua hàng'} />
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
