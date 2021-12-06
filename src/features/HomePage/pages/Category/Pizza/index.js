import { Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Item from 'features/HomePage/components/Item';
import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';
// import Data from 'API/Category/Pizza';
const useStyles = makeStyles({
  root: {},
  body: {
    marginTop: '100px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gridGap: '20px',
  },
<<<<<<< HEAD
  button: {
    width: '100%',
    borderRadius: '20px !important',
    height: '20px',
    background: '#ff8000 !important',
    fontSize: '12px',
=======

  moreBtn: {
    width: '100%',
    background: 'linear-gradient(45deg, #f59838  30%, #ffca53 90%)',
    borderRadius: '30px !important',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
>>>>>>> 15260bccc81a39fdd853a390a168ed191e746af5
  },
});
// console.log(getData());

export default function Pizza() {
  const classes = useStyles();
  const [limit, setLimit] = useState(6);

  function handleMoreBtn() {
    if (limit < data.length) {
      setLimit(limit + 6);
    }
  }

  // API
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const requestUrl = 'http://127.0.0.1:8000/piza/?size=S';
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      console.log(responseJSON);
      setData(responseJSON);
    }

    getData();
  }, []);

  return (
    <Box className={classes.root}>
      <Box className={classes.body}>
        {data.slice(0, limit).map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Box>
      <Button
<<<<<<< HEAD
        sx={{ display: limit >= data.length ? 'none' : '' }}
=======
        className={classes.moreBtn}
        sx={{ display: limit >= pizzaList.length ? 'none' : '' }}
>>>>>>> 15260bccc81a39fdd853a390a168ed191e746af5
        variant="contained"
        onClick={handleMoreBtn}
        className={classes.button}
      >
        Xem thêm
      </Button>
    </Box>
  );
}

const pizzaList = [
  {
    id: v4(),
    srcImg: 'public/img/pizza.png',
    name: 'Pizza Hải Sản Đào',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
  {
    id: v4(),
    srcImg: 'pizza.png',
    name: 'Pizza Hải Sản Đào',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
  {
    id: v4(),
    srcImg: 'pizza.png',
    name: 'Pizza Hải Sản Đào 2',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
  {
    id: v4(),
    srcImg: 'pizza.png',
    name: 'Pizza Hải Sản Đào 2',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
  {
    id: v4(),
    srcImg: 'pizza.png',
    name: 'Pizza Hải Sản Đào 2',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
  {
    id: v4(),
    srcImg: 'pizza.png',
    name: 'Pizza Hải Sản Đào 3',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
  {
    id: v4(),
    srcImg: 'pizza.png',
    name: 'Pizza Hải Sản Đào',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
];