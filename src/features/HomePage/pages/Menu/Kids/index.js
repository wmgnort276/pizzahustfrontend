import { Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Item from 'features/HomePage/components/Item';
import React, { useEffect, useState } from 'react';
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

export default function Kids() {
  const classes = useStyles();
  const [limit, setLimit] = useState(3);

  function handleMoreBtn() {
    if (limit < breakfastList.length) {
      setLimit(limit + 6);
    }
  }

  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const requestUrlPizza = 'http://127.0.0.1:8000/piza/?menu=Treem';
      const responsePizza = await fetch(requestUrlPizza);
      const responseJSONPizza = await responsePizza.json();
      const requestUrl = 'http://127.0.0.1:8000/side/?menu=Treem';
      const response = await fetch(requestUrl);
      let responseJSON = await response.json();
      responseJSON = [...responseJSONPizza, ...responseJSON]
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
        className={classes.moreBtn}
        sx={{ display: limit >= data.length ? 'none' : '' }}
        variant="contained"
        onClick={handleMoreBtn}
        // className={classes.button}
      >
        Xem thêm
      </Button>
    </Box>
  );
}

const breakfastList = [
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
