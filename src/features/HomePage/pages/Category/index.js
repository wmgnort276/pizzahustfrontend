import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TaskBar from 'features/HomePage/components/TaskBar';
import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Pasta from './Pasta';
import Pizza from './Pizza';

const useStyles = makeStyles({
  root: {},
});

export default function Category() {
  const classes = useStyles();
  const [activeId, setActiveId] = useState(1);

  const onTabClick = (id) => {
    setActiveId(id);
  };

  return (
    <Box className={classes.root}>
      <TaskBar
        categories={categories}
        activeId={activeId}
        onTabClick={onTabClick}
      />
      {activeId === 1 && <Pizza />}
      {activeId === 2 && <Pasta />}
      {/* {activeId === 3 && < />} */}
      {/* {activeId === 4 && < />} */}
      {/* {activeId === 5 && < />} */}
      {/* {activeId === 6 && < />} */}
    </Box>
  );
}

const categories = [
  {
    id: 1,
    name: 'Pizza',
  },
  {
    id: 2,
    name: 'Mỳ Ý',
  },
  {
    id: 3,
    name: 'Gà BBQ',
  },
  {
    id: 4,
    name: 'Salad',
  },
  {
    id: 5,
    name: 'Khoai tây chiên',
  },
  {
    id: 6,
    name: 'Đồ uống',
  },
];
