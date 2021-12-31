import AddIcon from '@mui/icons-material/Add';
import { Box, Fab, Rating } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ListItem from 'features/HomePage/components/ListItem';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ChooseProduct } from '../../../Slice';
import SearchBtn from '../Main/pages/SearchBtn';

export default function Search() {
  const { search } = useParams();

  const [pizzaResponse, setPizzaResponse] = useState([]);
  const [sideResponse, setSideResponse] = useState([]);
  const [comboResponse, setComboResponse] = useState([]);

  // API
  const [loading, setLoading] = useState(false);
  const pizzaSearch = 'http://127.0.0.1:8000/piza/?search=' + search.slice(7);
  const sideSearch = 'http://127.0.0.1:8000/side/?search=' + search.slice(7);
  const comboSearch = 'http://127.0.0.1:8000/combo/?search=' + search.slice(7);

  useEffect(() => {
    async function getData() {
      const responsePizza = await fetch(pizzaSearch);
      setPizzaResponse(await responsePizza.json());
      setLoading(true);

      const responseSide = await fetch(sideSearch);
      setSideResponse(await responseSide.json());
      setLoading(true);

      const responseCombo = await fetch(comboSearch);
      setComboResponse(await responseCombo.json());
      setLoading(true);
    }

    getData();
  }, [comboSearch, pizzaSearch, sideSearch]);

  const data = [...pizzaResponse, ...sideResponse, ...comboResponse];

  return (
    <div>
      {search.length > 7 && (
        <Box sx={{ mt: 2 }}>
          <SearchBtn />
          <Box>
            <div style={{ margin: '4rem 0 6rem 0', textAlign: 'center' }}>
              Hiển thị kết quả tìm kiếm cho {search.slice(7)}
              <p style={{ marginTop: '0' }}>Có {data.length} kết quả</p>
            </div>

            <ListItem listItem={data} />
          </Box>
        </Box>
      )}
    </div>
  );
}

const useStylesProductItem = makeStyles({
  root: {
    padding: '0 15px',
    borderRadius: '20px',
    backgroundColor: '#fff',
    display: 'flex',
    flex: '0 1 30%',
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
        transform: 'scale(1.2) rotate(20deg)',
        transition: '1s',
      },
      '& p': {
        color: '#ff8000',
      },
    },

    '& p': {
      margin: 0,
      fontSize: '16px',
      display: 'WebkitBox',
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

function Item({ item }) {
  const classes = useStylesProductItem();
  const dispatch = useDispatch();

  function handleAddClick() {
    dispatch(ChooseProduct(item));
  }

  return (
    <div className={classes.root}>
      <img src={item.image} alt="" style={{ width: '100%' }} />
      <p>{item.name}</p>
      <div className={classes.body}>
        <div>
          <Rating readOnly defaultValue={item.rating} size="small" />
          <p>{item.cost}đ</p>
        </div>
        <Fab
          size="small"
          onClick={handleAddClick}
          style={{ backgroundColor: '#ff8000' }}
        >
          <AddIcon style={{ fill: '#fff' }} />
        </Fab>
      </div>
    </div>
  );
}
