import AddIcon from '@mui/icons-material/Add';
import { Fab, Rating, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ChooseProduct } from 'features/Slice';
import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import ListItem from '../ListItem';

const useStyles = makeStyles({
  root: {
    padding: '0 15px',
    borderRadius: '20px',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    marginBottom: '70px',
    boxShadow:
      '4px 4px 4px rgba(255, 128, 1, 0.25), -2px -2px 4px rgba(208, 208, 208, 0.15)',
    transition: 'all 0.2s ease-in-out',

    '& img': {
      alignSelf: 'center',
      marginTop: '-70px',
      transition: '.3s all ease-in-out!important',
    },

    '&:hover': {
      '& img': {
        transform: 'rotate(20deg)',
        transition: '0.5s',
      },
      '& p': {
        color: '#ff8000',
      },
    },

    '& p': {
      margin: 0,
      fontSize: '16px',
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: '2',
      maxHeight: '4rem',
      minHeight: '2.4rem',
      fontWeight: 600,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textAlign: 'left',
    },
    '& Fab': {
      backgroundColor: '#ff8000',
    },
  },

  body: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  text: {},
});

export default function Item({ item }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState({});

  useEffect(() => {
    // Nếu sản phẩm được chọn là Combo

    if (item.hasOwnProperty('numberperson')) {
      // Lấy item mặc định trong combo
      const productDefault = [];
      // const numberPizza = item.combo[0].amountPizza;
      // const numberSide = item.combo[0].amount;
      for (let j = 0; j < item.combo.length; j++) {
        const numberPizza = item.combo[j].amountPizza;
        for (let i = 0; i < numberPizza; i++) {
          const newItem = {
            ...item.combo[j].pizza,
            id: v4(),
            itemsToChange: item.pizzas,
          };
          productDefault.push(newItem);
        }
      }
      for (let j = 0; j < item.combo.length; j++) {
        const numberSide = item.combo[j].amount;
        for (let i = 0; i < numberSide; i++) {
          const newItem = {
            ...item.combo[j].dishes,
            id: v4(),
            itemsToChange: item.sides,
          };
          productDefault.push(newItem);
        }
      }
      setNewItem({ ...item, id: v4(), quantity: 1, productDefault });
    }
  }, [item]);

  function handleAddClick() {
    if (item.hasOwnProperty('numberperson')) {
      dispatch(ChooseProduct(newItem));
    } else {
      dispatch(ChooseProduct(item));
    }
  }

  return (
    <div className={classes.root}>
      <img
        src={item.image}
        // src={process.env.PUBLIC_URL + `${item.srcImg}`}
        alt=""
        style={{ width: '80%' }}
      />
      <p>{item.name}</p>
      <div className={classes.body}>
        <div>
          <Rating readOnly defaultValue={item.score_fields} size="small" />
          <p>
            {item.cost}
            <span style={{ color: '#ff8000' }}> đ</span>
          </p>
        </div>
        <Tooltip title="Thêm vào giỏ">
          <Fab
            size="small"
            onClick={handleAddClick}
            style={{ backgroundColor: '#ff8000' }}
          >
            <AddIcon style={{ fill: '#fff' }} />
          </Fab>
        </Tooltip>
      </div>
    </div>
  );
}
