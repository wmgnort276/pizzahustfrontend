import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import drinkList from 'constants/Category/drinkList';
import pizzaList from 'constants/Category/pizzaList';
import TaskBar from 'features/HomePage/components/TaskBar';
import React, { useState } from 'react';
import ListItem from '../../components/ListItem';

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
      {categories.map(
        (category) =>
          category.id === activeId &&
          category.listItem !== undefined && (
            <ListItem
              listItem={category.listItem}
              api={category.api}
              title="Thực đơn"
            />
          )
      )}
    </Box>
  );
}

const categories = [
  {
    id: 1,
    name: 'Pizza',
    listItem: pizzaList,
    api: '',
  },
  {
    id: 2,
    name: 'Mỳ Ý',
    listItem: pizzaList,
    api: '',
  },
  {
    id: 3,
    name: 'Gà BBQ',
    listItem: undefined,
    api: '',
  },
  {
    id: 4,
    name: 'Salad',
    listItem: pizzaList,
    api: '',
  },
  {
    id: 5,
    name: 'Khoai tây chiên',
    listItem: pizzaList,
    api: '',
  },
  {
    id: 6,
    name: 'Đồ uống',
    listItem: drinkList,
    api: '',
  },
];
