import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import NavBar from 'components/NavBar';
import React from 'react';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Combo from './pages/Combo';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Menu from './pages/Menu';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#FFF2F2',
    display: 'flex',
  },

  navBar: {},

  main: {
    padding: '0 40px 40px',
  },

  cart: {},
});

export default function HomePage() {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.root} container>
        <Grid item xs={1} className={classes.nav}>
          <NavBar className={classes.navBar} />
        </Grid>
        <Grid className={classes.main} item xs={7}>
          <Header />
          <Combo />
          <Category />
          <Menu />
          <Footer />
        </Grid>
        <Grid className={classes.cart} item xs={4}>
          <Cart />
        </Grid>
      </Grid>
    </>
  );
}
