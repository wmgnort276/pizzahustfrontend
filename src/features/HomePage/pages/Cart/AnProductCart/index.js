import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Autocomplete, Box, Popover, TextField } from '@mui/material';
import Button from 'components/Button';
import {
  AddBtnClick,
  addOldProduct,
  addProduct,
  BackBtnClick,
} from 'features/Slice';
import React, { useState } from 'react';
import ChangeCombo from '../ChangeCombo';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './styles';
import './styles.css';

export default function AnProductCart({ chooseProduct }) {
  const classes = useStyles();
  const [size, setSize] = useState(null);
  const [sole, setSole] = useState(null);
  const [topping, setTopping] = useState(null);
  const [openId, setOpenId] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const cart = useSelector((state) => state.cart.listProduct);
  const dispatch = useDispatch();

  // Cancel choose product
  function handleBackBtn() {
    dispatch(BackBtnClick());
  }

  // Change product in combo
  function handleChangeCombo(id, event) {
    setOpenId(id);
    setAnchorEl(event.currentTarget);
  }
  function handleCloseChange(event) {
    setOpenId(0);
    setAnchorEl(null);
  }

  function handleToCartBtn(e) {
    e.preventDefault();
    // Mua lẻ
    if (!chooseProduct.numberperson) {
      let product = {};
      if (chooseProduct.hasOwnProperty('size')) {
        // change cost when choose size, topping
        const toppingCost = topping !== null ? topping.addCost : 0;
        product = {
          ...chooseProduct,
          cost: chooseProduct.cost + size.addCost + toppingCost,
          quantity: 1,
          size: size.size,
          sole: sole.sole,
          topping: topping !== null ? topping.topping : '',
        };
      } else {
        product = {
          ...chooseProduct,
          quantity: 1,
        };
      }

      const idx = cart.findIndex((item) => item.pk === product.pk);
      if (idx !== -1) {
        // Nếu sản phẩm mới trùng sản phẩm đã chọn, quantity + 1
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

    // Mua combo
    else {
      const idx = cart.findIndex((item) => item.id === chooseProduct.id);
      if (idx !== -1) {
        // Nếu sản phẩm mới trùng sản phẩm đã chọn, quantity + 1
        dispatch(AddBtnClick(idx));
      } else {
        dispatch(addProduct(chooseProduct));
      }
    }
  }
  // console.log('chooseProduct', chooseProduct);

  return (
    <Box component="form" onSubmit={handleToCartBtn} className={classes.root}>
      <Box className={classes.logo}>
        <img
          srcSet={process.env.PUBLIC_URL + 'pizzaLogo.png 2x'}
          alt=""
          style={{ marginLeft: 'auto', display: 'block', cursor: 'pointer' }}
        />
      </Box>
      <ArrowBackIosIcon className={classes.back} onClick={handleBackBtn} />
      <Box className={classes.product}>
        <img
          src={chooseProduct.image}
          // src={process.env.PUBLIC_URL + `${chooseProduct.srcImg}`}
          alt=""
        />
        <Box>
          <p>{chooseProduct.name}</p>
          <p style={{ fontWeight: 400 }}>{chooseProduct.description}</p>
          <p>
            {chooseProduct.cost +
              (size !== null ? size.addCost : 0) +
              (topping !== null ? topping.addCost : 0)}
            <span style={{ color: '#FF8000' }}> đ</span>
          </p>
        </Box>
      </Box>

      {/* MUA THEO COMBO */}
      {chooseProduct.hasOwnProperty('numberperson') && (
        <Box className={classes.combo}>
          <Box>
            {chooseProduct.combo.map((item) => (
              <Box className={classes.comboItem} key={item.pk}>
                <img
                  src={item.image}
                  onClick={(event) => handleChangeCombo(item.pk, event)}
                  alt=""
                />
                <Popover
                  open={item.pk === openId}
                  anchorEl={anchorEl}
                  onClose={handleCloseChange}
                  transformOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                  }}
                >
                  {/* Truyền thêm props (api, ...) vào ChangeCombo để lấy được các sản phẩm thay thế */}
                  <ChangeCombo product={item} />
                </Popover>
                <span>
                  {item.quantity} {item.name}
                </span>
                <div>Mua lẻ</div>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {/* MUA MỘT SẢN PHẨM */}
      {!chooseProduct.hasOwnProperty('numberperson') && (
        <Box className={classes.choose}>
          {chooseProduct.hasOwnProperty('size') && (
            <Box>
              <Autocomplete
                className={classes.select}
                disablePortal
                id="size"
                value={size}
                options={sizes}
                onChange={(event, newValue) => {
                  setSize(newValue);
                }}
                isOptionEqualToValue={(option, value) =>
                  option.value === value.value
                }
                getOptionLabel={(option) => option.size}
                sx={{ mt: 1, mb: 1, width: '100%' }}
                renderOption={(props, option) => (
                  <Box component="li" {...props}>
                    {option.size} (+{option.addCost}đ)
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    name="size"
                    autoFocus
                    required
                    {...params}
                    label="Chọn size"
                  />
                )}
              />

              <Autocomplete
                className={classes.select}
                disablePortal
                id="sole"
                value={sole}
                options={soles}
                onChange={(event, newValue) => {
                  setSole(newValue);
                }}
                isOptionEqualToValue={(option, value) =>
                  option.value === value.value
                }
                getOptionLabel={(option) => option.sole}
                sx={{ mt: 1, mb: 1, width: '100%' }}
                renderOption={(props, option) => (
                  <Box component="li" {...props}>
                    {option.sole} (+{option.addCost}đ)
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField name="sole" required {...params} label="Chọn đế" />
                )}
              />

              {/* <span>Chọn topping</span> */}
              <Autocomplete
                className={classes.select}
                disablePortal
                id="topping"
                options={toppings}
                value={topping}
                onChange={(event, newValue) => {
                  setTopping(newValue);
                }}
                isOptionEqualToValue={(option, value) =>
                  option.value === value.value
                }
                getOptionLabel={(option) => option.topping}
                sx={{ mt: 1, mb: 1, width: '100%' }}
                renderOption={(props, option) => (
                  <Box component="li" {...props}>
                    {option.topping} (+{option.addCost}đ)
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField name="topping" {...params} label="Chọn topping" />
                )}
              />
            </Box>
          )}
        </Box>
      )}

      <Button type="submit" name={'Thêm vào giỏ'} />
    </Box>
  );
}

const sizes = [
  {
    size: 'Size S',
    addCost: 0,
  },
  {
    size: 'Size M',
    addCost: 80000,
  },
  {
    size: 'Size L',
    addCost: 160000,
  },
];

const soles = [
  {
    sole: 'Đế giòn',
    addCost: 0,
  },
  {
    sole: 'Đế mềm xốp',
    addCost: 0,
  },
];

const toppings = [
  {
    topping: 'Thêm phô mai phủ',
    addCost: 10000,
  },
  {
    topping: 'Thêm phô mai viền',
    addCost: 10000,
  },
  {
    topping: 'Double sốt',
    addCost: 10000,
  },
];
