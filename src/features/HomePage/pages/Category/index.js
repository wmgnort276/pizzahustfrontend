import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TaskBar from 'features/HomePage/components/TaskBar';
import React, { useState } from 'react';
import Pasta from './Pasta';
import Pizza from './Pizza';
import BBQ from './BBQ';
import Salad from './Salad';
import Chips from './Chips';
import Drink from './Drink';

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
      {categories.map((category) =>
        category.id === activeId ? category.component : null
      )}
    </Box>
  );
}

const categories = [
  {
    id: 1,
    name: 'Pizza',
    component: <Pizza />,
  },
  {
    id: 2,
    name: 'Mỳ Ý',
    component: <Pasta />,
  },
  {
    id: 3,
    name: 'Gà BBQ',
    component: <BBQ />,
  },
  {
    id: 4,
    name: 'Salad',
    component: <Salad />,
  },
  {
    id: 5,
    name: 'Khoai tây chiên',
    component: <Chips />,
  },
  {
    id: 6,
    name: 'Đồ uống',
    component: <Drink />,
  },
];
