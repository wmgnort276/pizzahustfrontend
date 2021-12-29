import { Button, Box, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import pizzaList from 'constants/Category/pizzaList';
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
    backgroundColor: '#ff8000 !important',
    borderRadius: '30px !important',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
});

export default function ListItem({ listItem, api }) {
  const classes = useStyles();
  const [limit, setLimit] = useState(6);

  // API
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      const response = await fetch(api);
      const responseJSON = await response.json();
      setData(responseJSON);

      setLoading(true);
    }

    getData();
  }, [api]);

  function handleMoreBtn() {
    if (limit < data.length) {
      setLimit(limit + 6);
    }
  }

  return (
    <Box className={classes.root}>
      {loading ? (
        <>
          <Box className={classes.body}>
            {data.slice(0, limit).map((item) => (
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
        </>
      ) : (
        <Box style={{ textAlign: 'center' }}>
          <CircularProgress color="success" style={{ margin: '20px auto' }} />
        </Box>
      )}
    </Box>
  );
}
