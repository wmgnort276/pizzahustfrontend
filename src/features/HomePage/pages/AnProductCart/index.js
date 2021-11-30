import { Autocomplete, Box, TextField } from '@mui/material';
import Button from 'components/Button';
import React, { useState } from 'react';
import { useStyles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import {
  AddBtnClick,
  addOldProduct,
  addProduct,
  BackBtnClick,
} from 'features/Slice';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const storageKey = 'cartList';

export default function AnProductCart({ chooseProduct }) {
  const classes = useStyles();
  const [size, setSize] = useState('');
  const [sole, setSole] = useState('');
  const [topping, setTopping] = useState('');
  const [note, setNote] = useState('Không hành');
  const cart = useSelector((state) => state.cart.listProduct);
  const dispatch = useDispatch();

  const product = {
    ...chooseProduct,
    size,
    sole,
    topping,
    note,
  };

  function handleBackBtn() {
    dispatch(BackBtnClick());
  }

  function handleToCartBtn() {
    const idx = cart.findIndex((item) => item.id === product.id);
    if (idx !== -1) {
      console.log('can find');
      if (
        cart[idx].size === product.size &&
        cart[idx].sole === product.sole &&
        cart[idx].topping === product.topping
      ) {
        dispatch(AddBtnClick(idx));
      } else {
        dispatch(addOldProduct(product));
      }
    } else {
      dispatch(addProduct(product));
    }
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
      <ArrowBackIosIcon className={classes.back} onClick={handleBackBtn} />
      <Box className={classes.product}>
        <img src={chooseProduct.image} alt="" />
        <Box>
          <p style={{  }}>{chooseProduct.name}</p>
          <p style={{ fontWeight: 400 }}>{chooseProduct.description}</p>
          <p>
            {chooseProduct.cost}
            <span style={{ color: '#FF8000' }}>đ</span>
          </p>
        </Box>
      </Box>
      <Box
        component="form"
        className={classes.choose}
        onSubmit={handleToCartBtn}
      >
        <Box sx={{ flex: 1 }}>
          <Autocomplete
            disablePortal
            id="size"
            inputValue={size}
            autoHighlight
            options={sizes}
            onInputChange={(event, newValue) => {
              setSize(newValue);
            }}
            isOptionEqualToValue={(option, value) =>
              option.value === value.value
            }
            getOptionLabel={(option) => option.size}
            sx={{ mt: 1, mb: 1, width: '100%' }}
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                {option.size} ({option.cost}đ)
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                name="size"
                required
                {...params}
                label="Chọn kích thước"
              />
            )}
          />
          <Autocomplete
            disablePortal
            id="sole"
            inputValue={sole}
            options={soles}
            onInputChange={(event, newValue) => {
              setSole(newValue);
            }}
            isOptionEqualToValue={(option, value) =>
              option.value === value.value
            }
            getOptionLabel={(option) => option.sole}
            sx={{ mt: 1, mb: 1, width: '100%' }}
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                {option.sole} ({option.cost})
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                name="sole"
                required
                {...params}
                label="Chọn loại đế"
              />
            )}
          />
          <Autocomplete
            disablePortal
            id="topping"
            inputValue={topping}
            options={toppings}
            onInputChange={(event, newValue) => {
              setTopping(newValue);
            }}
            isOptionEqualToValue={(option, value) =>
              option.value === value.value
            }
            getOptionLabel={(option) => option.topping}
            sx={{ mt: 1, mb: 1, width: '100%' }}
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                {option.topping} ({option.cost}đ)
              </Box>
            )}
            renderInput={(params) => (
              <TextField name="sole" {...params} label="Chọn Topping" />
            )}
          />
        </Box>

        <Button type="submit" name={'Thêm vào giỏ'} />
      </Box>
    </Box>
  );
}

const sizes = [
  {
    size: 'Nhỏ',
    cost: '',
  },
  {
    size: 'Vừa',
    cost: '+80000',
  },
  {
    size: 'Lớn',
    cost: '+160000',
  },
];

const soles = [
  {
    sole: 'Đế giòn',
    cost: 'miễn phí',
  },
  {
    sole: 'Đế mềm xốp',
    cost: 'miễn phí',
  },
];

const toppings = [
  {
    topping: 'Thêm phô mai phủ',
    cost: 10000,
  },
  {
    topping: 'Thêm phô mai viền',
    cost: 10000,
  },
  {
    topping: 'Double sốt',
    cost: 10000,
  },
];
