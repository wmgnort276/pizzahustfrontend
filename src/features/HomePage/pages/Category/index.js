import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TaskBar from 'features/HomePage/components/TaskBar';
import React, { useState } from 'react';
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
    // component: </>
  },
  {
    id: 4,
    name: 'Salad',
    // component: </>
  },
  {
    id: 5,
    name: 'Khoai tây chiên',
    // component: </>
  },
  {
    id: 6,
    name: 'Đồ uống',
    // component: </>
  },
];
