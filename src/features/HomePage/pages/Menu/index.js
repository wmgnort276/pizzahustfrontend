import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TaskBar from 'features/HomePage/components/TaskBar';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import Breakfast from './Breakfast';

const useStyles = makeStyles({
  root: {},
});

export default function Menu() {
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
      {activeId === 1 && <Breakfast />}
      {/* {activeId === 2 && <Pasta />} */}
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
    name: 'Sáng',
    link: 'breakfast',
  },
  {
    id: 2,
    name: 'Trưa',
    link: 'lunch',
  },
  {
    id: 3,
    name: 'Chiều',
    link: 'afternoon',
  },
  {
    id: 4,
    name: 'Tối',
    link: 'dinner',
  },
  {
    id: 5,
    name: 'Chay',
    link: 'chay',
  },
  {
    id: 6,
    name: 'Trẻ em',
    link: 'children',
  },
];
