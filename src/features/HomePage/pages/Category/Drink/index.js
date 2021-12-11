import { Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Item from 'features/HomePage/components/Item';
import React, { useState } from 'react';
import { v4 } from 'uuid';

const useStyles = makeStyles({
  root: {},
  body: {
    marginTop: '100px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gridGap: '20px',
  },

  moreBtn: {
    width: '100%',
    background: 'linear-gradient(45deg, #f59838  30%, #ffca53 90%)',
    borderRadius: '30px !important',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
});

export default function Pizza() {
  const classes = useStyles();
  const [limit, setLimit] = useState(6);

  function handleMoreBtn() {
    if (limit < drinkList.length) {
      setLimit(limit + 6);
    }
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.body}>
        {drinkList.slice(0, limit).map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Box>
      <Button
        className={classes.moreBtn}
        sx={{ display: limit >= drinkList.length ? 'none' : '' }}
        variant="contained"
        onClick={handleMoreBtn}
      >
        Xem thêm
      </Button>
    </Box>
  );
}

const drinkList = [
  {
    id: v4(),
    srcImg: 'drink1.png',
    name: 'Bia 333',
    type: 'one1',
    quantity: 1,
    rating: 5,
    cost: 49000,
    desc: '',
  },
  {
    id: v4(),
    srcImg: 'drink2.png',
    name: '7Up Lon',
    type: 'one1',
    quantity: 1,
    rating: 5,
    cost: 29000,
    desc: '',
  },
  {
    id: v4(),
    srcImg: 'drink3.png',
    name: 'Bia Tiger',
    type: 'one1',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
  {
    id: v4(),
    srcImg: 'drink1.png',
    name: 'Bia 333',
    type: 'one1',
    quantity: 1,
    rating: 5,
    cost: 49000,
    desc: '',
  },
  {
    id: v4(),
    srcImg: 'drink2.png',
    name: '7Up Lon 2',
    type: 'one1',
    quantity: 1,
    rating: 5,
    cost: 29000,
    desc: '',
  },
  {
    id: v4(),
    srcImg: 'drink3.png',
    name: 'Bia Tiger',
    type: 'one1',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
  {
    id: v4(),
    srcImg: 'drink1.png',
    name: 'Bia 333',
    type: 'one1',
    quantity: 1,
    rating: 5,
    cost: 49000,
    desc: '',
  },
];
