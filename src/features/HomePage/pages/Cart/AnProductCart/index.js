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
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import ChangeCombo from '../ChangeCombo';
import { useStyles } from './styles';
import './styles.css';
import { ChooseProduct } from 'features/Slice';

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

  // CHANGE PRODUCT IN COMBO
  // Mở list các item thay thế
  function handleChangeCombo(id, event) {
    setOpenId(id);
    setAnchorEl(event.currentTarget);
  }
  // Đóng list các item thay thế
  function handleCloseChange(event) {
    setOpenId(0);
    setAnchorEl(null);
  }
  // Thay đổi combo khi chọn sản phẩm khác
  function changeItem(item, itemsToChange) {
    const idx = chooseProduct.productDefault.findIndex(
      (item) => item.id === openId
    );
    const newProductDefault = chooseProduct.productDefault.map((i) =>
      i.id === openId
        ? {
            ...item,
            id: chooseProduct.productDefault[idx].id,
            itemsToChange,
          }
        : i
    );
    chooseProduct = {
      ...chooseProduct,
      productDefault: newProductDefault,
    };
    console.log('chooseProduct', chooseProduct);
    dispatch(ChooseProduct(chooseProduct));
  }

  // KHI NHẤN THÊM VÀO GIỎ
  function handleToCartBtn(e) {
    e.preventDefault();
    // Mua lẻ
    if (!chooseProduct.numberperson) {
      let product = {};
      // Nếu sản phẩm là pizza
      if (chooseProduct.hasOwnProperty('size')) {
        // change cost when choose size, topping
        const toppingCost = topping !== null ? topping.addCost : 0;
        product = {
          ...chooseProduct,
          id: v4(),
          cost: chooseProduct.cost + size.addCost + toppingCost,
          quantity: 1,
          size: size.size,
          sole: sole.sole,
          topping: topping !== null ? topping.topping : '',
        };
      } else {
        // Nếu sản phẩm không là pizza
        product = {
          ...chooseProduct,
          id: v4(),
          quantity: 1,
        };
      }

      const idx = cart.findIndex((item) => item.id === product.id);
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
        if (cart[idx].productDefault === chooseProduct.productDefault) {
          dispatch(AddBtnClick(idx));
        } else {
          dispatch(addOldProduct(chooseProduct));
        }
      } else {
        dispatch(addProduct(chooseProduct));
      }
    }
  }

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
            {chooseProduct.productDefault.map((item) => (
              <Box className={classes.comboItem} key={item.id}>
                <img
                  src={item.image}
                  onClick={(event) => handleChangeCombo(item.id, event)}
                  alt=""
                />
                <Popover
                  open={item.id === openId}
                  anchorEl={anchorEl}
                  onClose={handleCloseChange}
                  transformOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                  }}
                >
                  {/* Truyền thêm props (api, ...) vào ChangeCombo để lấy được các sản phẩm thay thế */}
                  <ChangeCombo
                    changeItem={changeItem}
                    changeTo={item.itemsToChange}
                  />
                </Popover>
                <span>{item.name}</span>
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
