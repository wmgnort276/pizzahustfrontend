import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useParams } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { Fab, Rating } from '@mui/material';
import { ChooseProduct } from '../../../Slice';
import { useDispatch } from 'react-redux';
import pizzaList from '../../../../constants/Category/pizzaList';
const useStyles = makeStyles({
  container: {
    marginTop: "10px"
  },
  head: {

  },
  body: {
    
  },
  searchBtn: {
    height: '27px',
    width: '163px',
    border: 'none',
    outline: 'none',
    borderRadius: '45px',
    padding: '0 19px',
    boxSizing: 'border-box',
  },
})
export default function Search() {
  const { search } = useParams();
  console.log(search.slice(15));
  
  const classes = useStyles();
  return <div>{search && <div>
        <Box className={classes.container}>
            <Box className={classes.head} >
              <div className="head-wrap" style={{position: "relative", display: "flex", alignItems: "center", justifyContent: "center"}}>
                  <img srcSet={process.env.PUBLIC_URL + "pizzaLogo.png 2x"}></img>
                  <input
                  style={{position: "absolute", right: "20px"}}
              type="text"
              className={classes.searchBtn}
              placeholder="Tìm kiếm"
              name="Search"
            />
              </div>
            </Box>
            <Box className={classes.body} style={{display: "flex", flexWrap: "wrap", flexDirection:"column", justifyContent: "space-between"}}>
                <div className="body-head" style={{marginBottom: "6rem", textAlign: "center"}}>
                    <h6 >Tìm kiếm</h6>
                    <p style={{marginBottom: "0" }}>Hiển thị kết quả tìm kiếm cho {"Pate"}</p>
                    <p style={{marginTop: "0" }}>Có {"16"} kết quả</p>
                    



                </div>
                <div className="body-bottom" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
                  {console.log(pizzaList)}
                    {pizzaList.map((pizza) => {
                      return <Item item={pizza} />
                    })}
                </div>
            </Box>
        </Box>
    </div>}</div>;
}

const useStylesProductItem = makeStyles({
  root: {
    padding: '0 15px',
    borderRadius: '20px',
    backgroundColor: '#fff',
    display: 'flex',
    flex: "0 1 30%",
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
        transform: 'scale(1.2) rotate(60deg)',
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
      <img
        src={process.env.PUBLIC_URL + `${item.srcImg}`}
        alt=""
        style={{ width: '100%' }}
      />
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