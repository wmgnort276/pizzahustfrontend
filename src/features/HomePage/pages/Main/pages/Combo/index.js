import React, { useState, useEffect } from 'react';
import { Button, Box, CircularProgress } from '@mui/material';
import { v4 } from 'uuid';
import { makeStyles } from '@mui/styles';
import Item from 'features/HomePage/components/Item';

const useStyles = makeStyles({
  root: {},

  title: {
    margin: '40px 0 80px 0',
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: 22 / 18,
  },

  body: {
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

export default function Combo() {
  const classes = useStyles();
  const [limit, setLimit] = useState(6);

  function handleMoreBtn() {
    if (limit < data.length) {
      setLimit(limit + 6);
    }
  }

  const [data, setData] = useState([]);
  const[loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      const response = await fetch('http://127.0.0.1:8000/combo/');
      const responseJSON = await response.json();
      setData(responseJSON);
      setLoading(true);
    }

    getData();
  }, []);
  console.log(data)
  return (
    <div>
      <Box className={classes.root}>
        <Box className={classes.title}>Combo khuyến mãi</Box>
        {loading ? (
        <>
          <Box className={classes.body}>
            {data.map((item) => (
              <Item key={item.pk} item={item} />
            ))}
          </Box>
          <Button
            className={classes.moreBtn}
            sx={{ display: limit >= data.length ? 'none' : '' }}
            variant="contained"
            onClick={handleMoreBtn}
          >
            Xem thêm
          </Button>
        </>) : (
          <Box style={{textAlign: "center"}}>
            <CircularProgress color="success" style={{margin: "20px auto"}}/>
          </Box>
        )}
      </Box>
    </div>
  );
}

const comboList = [
  {
    id: v4(),
    srcImg: 'combo/combo1.png',
    name: 'Combo Pizza Puff',
    type: 'combo',
    quantity: 1,
    score_fields: 5,
    cost: 89000,
    numberperson: 2,
    desc: '',
    product: [
      {
        id: 10,
        name: 'Pizza Puff_Giăm Bông & Thịt Xông Khói',
        srcImg: 'combo/1_item1-1.png',
        quantity: 1,
      },
      {
        id: 2,
        name: 'Pepsi Lon',
        srcImg: 'combo/1_item2-1.png',
        quantity: 1,
      },
    ],
  },
];
