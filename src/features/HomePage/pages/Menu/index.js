import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TaskBar from 'features/HomePage/components/TaskBar';
import React, { useState } from 'react';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Noon from './Noon';
import Dinner from './Dinner';
import Vegetarian from './Vegetarian';
import Kids from './Kids';

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
      <TaskBar categories={menus} activeId={activeId} onTabClick={onTabClick} />
      {menus.map((menu) => (menu.id === activeId ? menu.component : null))}
    </Box>
  );
}

const menus = [
  {
    id: 1,
    name: 'Sáng',
    component: <Breakfast />,
  },
  {
    id: 2,
    name: 'Trưa',
    component: <Lunch />,
  },
  {
    id: 3,
    name: 'Chiều',
    component: <Noon />,
  },
  {
    id: 4,
    name: 'Tối',
    component: <Dinner />,
  },
  {
    id: 5,
    name: 'Chay',
    component: <Vegetarian  />,
  },
  {
    id: 6,
    name: 'Trẻ em',
    component: <Kids />,
  },
];
