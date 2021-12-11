import { Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import pizzaList from 'constants/Category/pizzaList';
import Item from 'features/HomePage/components/Item';
import React, { useEffect, useState } from 'react';

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

export default function ListItem({ listItem, api }) {
  const classes = useStyles();
  const [limit, setLimit] = useState(3);

  function handleMoreBtn() {
    if (limit < listItem.length) {
      setLimit(limit + 6);
    }
  }

  // API
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   async function getData() {
  //     const requestUrl = 'http://127.0.0.1:8000/piza/?size=S';
  //     const response = await fetch(requestUrl);
  //     const responseJSON = await response.json();
  //     console.log(responseJSON);
  //     setData(responseJSON);
  //   }

  //   getData();
  // }, []);

  return (
    <Box className={classes.root}>
      <Box className={classes.body}>
        {listItem.slice(0, limit).map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Box>
      <Button
        className={classes.moreBtn}
        sx={{ display: limit >= listItem.length ? 'none' : '' }}
        variant="contained"
        onClick={handleMoreBtn}
      >
        Xem thêm
      </Button>
    </Box>
  );
}
