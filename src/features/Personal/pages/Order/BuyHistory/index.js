import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import ProductList from 'features/Personal/components/ProductList';
import React from 'react';

const useStyles = makeStyles({
  root: {
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    overflow: 'auto',
    height: 'calc(100vh - 200px)',
    margin: '0 20px',

    /* width */
    '&::-webkit-scrollbar': {
      width: '5px',
      borderRadius: '10px',
    },

    /* Track */
    '&::-webkit-scrollbar-track': {
      background: '#fff2e0',
    },

    /* Handle */
    '&::-webkit-scrollbar-thumb': {
      background: '#ff8000',
      borderRadius: '10px',
    },
  },
});

export default function BuyHistory() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {buyHistory.map((list) => (
        <ProductList key={list.id} list={list.productList} fee={list.fee} />
      ))}
    </Box>
  );
}

const buyHistory = [
  {
    id: 1,
    fee: 1200000,
    productList: [
      {
        id: 1,
        srcImg: '',
        name: 'Pizza Hải Sản Đào',
        quantity: 1,
        cost: 69000,
        size: 'Size S',
        sole: 'Đế mỏng',
        topping: '',
      },
      {
        id: 2,
        srcImg: '',
        name: 'Pizza Hải Sản Đào',
        quantity: 1,
        cost: 69000,
        size: 'Size S',
        sole: 'Đế mỏng',
        topping: '',
      },
    ],
  },
  {
    id: 2,
    fee: 1200000,
    productList: [
      {
        id: 1,
        srcImg: '',
        name: 'Pizza Hải Sản Đào',
        quantity: 1,
        cost: 69000,
        size: 'Size S',
        sole: 'Đế mỏng',
        topping: '',
      },
      {
        id: 2,
        srcImg: '',
        name: 'Pizza Hải Sản Đào',
        quantity: 1,
        cost: 69000,
        size: 'Size S',
        sole: 'Đế mỏng',
        topping: '',
      },
    ],
  },
];
