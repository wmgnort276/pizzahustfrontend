import React from 'react';
import { Box, Divider } from '@mui/material';
import Button from 'components/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useStyles } from './styles.js';
import { useDispatch } from 'react-redux';
import { AddBtnClick, DelBtnClick, SubBtnClick } from 'features/Slice/index.js';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function ListProductCart({ cart }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onSubBtnClick = (id) => {
    const idx = cart.findIndex((item) => item.id === id);
    dispatch(SubBtnClick(idx));
  };

  const onAddBtnClick = (id) => {
    const idx = cart.findIndex((item) => item.id === id);
    dispatch(AddBtnClick(idx));
  };

  const onDelBtnClick = (id) => {
    const idx = cart.findIndex((item) => item.id === id);
    dispatch(DelBtnClick(idx));
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.logo}>
        <img
          srcSet={process.env.PUBLIC_URL + 'pizzaLogo.png 2x'}
          alt=""
          style={{ marginLeft: 'auto', display: 'block' }}
        />
      </Box>
      <Box className={classes.product}>
        <Box className={classes.text}>
          <span style={{ fontSize: '18px', fontWeight: 700 }}>Giỏ hàng</span>
          <span style={{ fontSize: '12px', fontWeight: 500, color: '#FF8000' }}>
            Xem thêm
          </span>
        </Box>
        <Box className={classes.productList}>
          {cart.map((item) => (
            <Box key={item.id} className={classes.productItem}>
              <img src={item.image} alt="" />
              <Box className={classes.itemInfo}>
                <p className={classes.itemName}>{item.name}</p>
                <Box className={classes.quantity}>
                  <Box onClick={() => onSubBtnClick(item.id)}>
                    <RemoveIcon sx={{ cursor: 'pointer' }} />
                  </Box>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <Box style={{color: '#ff8000'}} sx={{ margin: '0 10px' }}>{item.quantity}</Box>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <Box onClick={() => onAddBtnClick(item.id)}>
                    <AddIcon sx={{ cursor: 'pointer' }} />
                  </Box>
                </Box>
              </Box>
              <Box className={classes.cost}>
                <HighlightOffIcon
                  sx={{ cursor: 'pointer' }}
                  onClick={() => onDelBtnClick(item.id)}
                />
                <span>{item.cost * item.quantity} <span style={{color: '#ff8000'}}>đ</span></span>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Button name={'Mua hàng'} />
    </Box>
  );
}
