import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ListItem from 'features/HomePage/components/ListItem';
import TaskBar from 'features/HomePage/components/TaskBar';
import React, { useState } from 'react';

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
      {menus.map(
        (menu) =>
          menu.id === activeId &&
          menu.listItem !== undefined && (
            <ListItem listItem={menu.listItem} api={menu.api} title="Menu" />
          )
      )}
    </Box>
  );
}

const menus = [
  {
    id: 1,
    name: 'Sáng',
    listItem: undefined,
    api: '',
  },
  {
    id: 2,
    name: 'Trưa',
    listItem: undefined,
    api: '',
  },
  {
    id: 3,
    name: 'Chiều',
    listItem: undefined,
    api: '',
  },
  {
    id: 4,
    name: 'Tối',
    listItem: undefined,
    api: '',
  },
  {
    id: 5,
    name: 'Chay',
    listItem: undefined,
    api: '',
  },
  {
    id: 6,
    name: 'Trẻ em',
    listItem: undefined,
    api: '',
  },
];
