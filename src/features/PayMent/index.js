import { Grid } from '@mui/material';
import React from 'react';
import { makeStyles, useTheme } from '@mui/styles';
import PayCard from './pages/PayCart';
import UserForm from './pages/UserForm';
import { useMediaQuery } from '@mui/material';
// import NavBar from 'components/NavBar';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    backgroundColor: '#FFF2F2',
    width: (props) =>
      props.tablet ? 'calc(100vw - 16px) !important' : '100% !important',
  },
});

export default function Pay() {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up('tablet'));
  const classes = useStyles({ tablet });

  return (
    <Grid className={classes.root} container>
      {/* <Grid className={classes.navBar} item xs={1}>
        <NavBar />
      </Grid> */}
      <Grid className={classes.main} item xs={8}>
        <PayCard />
      </Grid>
      <Grid className={classes.userForm} item xs={4}>
        <UserForm />
      </Grid>
    </Grid>
  );
}
