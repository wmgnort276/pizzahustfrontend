import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Box, Snackbar, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/styles';
import Button from 'components/Button';
import InputField from 'components/FormFields/InputField';
import { buyAllRequest } from 'features/Slice';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useStyles } from './styles';

const schema = yup.object({
  name: yup
    .string()
    .required('Please enter your full name.')
    .test('two-words', 'Enter at least 2 words.', (value) => {
      if (!value) return true;
      const parts = value?.split(' ') || [];
      return parts.filter((x) => !!x).length >= 2;
    }),
  phone: yup
    .number()
    .positive('Invalid phone number.')
    .required('Please enter your phone.')
    .typeError('Invalid phone number.'),
  email: yup.string().email('Invalid email.').required('Please enter email.'),
  address: yup.string().required('Please enter your address.'),
});

export default function UserForm() {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up('tablet'));
  const classes = useStyles({ tablet });
  const [buySuccess, setBuySuccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const cart = useSelector((state) => state.cart.listProduct);
  const user = useSelector((state) => state.auth.username);
  console.log(user);

  // API
  const [dataCart, setDataCart] = useState([]);
  const apiCart = `http://127.0.0.1:8000/cart/?user__username=${user}`;
  useEffect(() => {
    async function getData() {
      const response = await fetch(apiCart);
      const responseJSON = await response.json();
      setDataCart(responseJSON);
    }
    getData();
  }, [apiCart]);
  console.log(dataCart);

  function handleBuyBtn(values) {
    const dataToOrder = values;
    console.log('data to order', dataToOrder);
    const orderside = cart.filter((item) => item.type);
    const ordercombo = cart.filter((item) => item.numberperson);
    const orderpizza = cart.filter((item) => item.costl);
    console.log(orderside);
    console.log(ordercombo);
    console.log(orderpizza);
    let orderpizza1 = [];
    for (let item of orderpizza) {
      orderpizza1.push({
        order: 41, //
        size: item.size,
        soles: item.sole,
        pizaa: item.pk,
        pizzaa: item,
        comboorder: null,
        amount: item.quantity,
        // cost: item.cost,
        pecent: 0,
      });
    }
    // console.log(orderpizza1)

    let orderside1 = [];
    for (let item of orderside) {
      orderside1.push({
        order: 41, //
        sidess: item.pk,
        sidedis: item,
        amount: item.quantity,
        cost: item.cost,
        pecent: 0,
      });
    }
    // console.log(orderside1)
    for (let item of ordercombo) {
      var percent = item.percent;
      for (let i of item.subProduct.filter((ite) => ite.costl)) {
        orderpizza1.push({
          order: 41, //
          size: 'M',
          soles: 'Mem xop',
          comboorder: item.pk,
          pizaa: i.pk,
          pizzaa: i,
          amount: item.quantity,
          // "cost": i.cost,
          pecent: percent,
        });
      }
      for (let i of item.subProduct.filter((ite) => ite.type)) {
        orderside1.push({
          order: 41, //
          sidess: i.pk,
          sidedis: i,
          amount: item.quantity,
          cost: i.cost,
          pecent: percent,
        });
      }
    }
    console.log(orderpizza1);
    console.log(orderside1);

    var dataPost = {
      cart: dataCart[1] ? null : dataCart[0].pk, //neu co tk mk thi them th nay vao
      name: dataToOrder.name,
      phonenumber: dataToOrder.phone,
      email: dataToOrder.email,
      address: dataToOrder.address,
      orderpizza: orderpizza1,
      orderside: orderside1,
      delive: 'Dang xac nhan',
      cost_fields: 20000,
    };
    var url_post = 'http://127.0.0.1:8000/order/';
    fetch(url_post, {
      method: 'POST', // th??m m???i th?? d??ng post
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataPost), // chuy???n d??? li???u object tr??n th??nh chu???i json
    })
      .then((response) => response.json()) // chuy???n k???t qu??? tr??? v??? th??nh json object
      .then((data) => {
        // b???n c?? th??? l??m g?? ???? v???i k???t qu??? cu???i c??ng n??y th?? l??m

        dispatch(buyAllRequest());
        setBuySuccess(true);
        console.log('Success:', data); // ghi log k???t qu??? ho??n th??nh
        setTimeout(() => {
          navigate('/success', { replace: true });
        }, 1000);
      })
      .catch((error) => {
        console.error('Error:', error); // ghi log n???u x???y ra l???i
      });
  }

  function handleClose() {
    setBuySuccess(false);
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.logo}>
        <img srcSet={process.env.PUBLIC_URL + 'pizzaLogo.png 2x'} alt="" />
      </Box>
      <span>Th??ng tin thanh to??n</span>

      <form className={classes.userForm} onSubmit={handleSubmit(handleBuyBtn)}>
        <Box className={classes.userForm}>
          <Box sx={{ mt: 2, mb: 2 }}>
            <InputField
              name="name"
              size="large"
              placeholder="H??? v?? t??n"
              control={control}
            />
          </Box>
          <Box sx={{ mt: 2, mb: 2 }}>
            <InputField
              name="phone"
              size="large"
              placeholder="S??? ??i???n tho???i"
              control={control}
            />
          </Box>
          <Box sx={{ mt: 2, mb: 2 }}>
            <InputField
              name="email"
              size="large"
              placeholder="Email"
              control={control}
            />
          </Box>
          <Box sx={{ mt: 2, mb: 2 }}>
            <InputField
              name="address"
              size="large"
              placeholder="?????a ch???"
              control={control}
            />
          </Box>
        </Box>
        <Button type="submit" name="Mua h??ng" />
      </form>

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
          Buy Successfully! Thank you!
        </Alert>
      </Snackbar>
    </Box>
  );
}
