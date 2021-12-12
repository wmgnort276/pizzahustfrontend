import { makeStyles } from '@mui/styles';
import HomePage from 'features/HomePage';
import Login from 'features/Login/pages';
import Pay from 'features/PayMent';
import Personal from 'features/Personal';
import Register from 'features/Register';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router';

const useStyles = makeStyles({
  root: {
    width: 'calc(100vw - 17px)',
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/personal" element={<Personal />} />
      </Routes>
    </div>
  );
}
