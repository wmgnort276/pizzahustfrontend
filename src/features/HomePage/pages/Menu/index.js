import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TaskBar from 'features/HomePage/components/TaskBar';
import React, { useState } from 'react';
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
    // component:
  },
  {
    id: 3,
    name: 'Chiều',
    // component:
  },
  {
    id: 4,
    name: 'Tối',
    // component:
  },
  {
    id: 5,
    name: 'Chay',
    // component:
  },
  {
    id: 6,
    name: 'Trẻ em',
    // component:
  },
];
