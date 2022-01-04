import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import NavBar from 'components/NavBar';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Cart from './pages/Cart';
import Main from './pages/Main';
import Search from './pages/Search';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#FFF2F2',
  },

  main: {
    padding: '0 40px 40px',
  },
});

export default function HomePage() {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.root} container>
        <Grid item xs={1} className={classes.nav}>
          <NavBar />
        </Grid>
        <Grid className={classes.main} item xs={7}>
          <Routes>
            <Route path="" element={<Navigate to="home" />} />
            <Route path="home" element={<Main />} />
            <Route path=":search" element={<Search />} />
          </Routes>
        </Grid>
        <Grid item xs={4}>
          <Cart />
        </Grid>
      </Grid>
    </>
  );
}
