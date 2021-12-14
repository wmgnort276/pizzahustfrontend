import { Box } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {},

  listChange: {
    margin: '20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 160px)',
    gridGap: '20px',
  },

  itemChange: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #fff',

    '& span': {
      textAlign: 'center',
      color: '#000',
      fontSize: '14px',
      fontWeight: 600,
    },
    '&:hover': {
      border: '1px solid #ff8000',
    },
    '&:hover span': {
      color: '#ff8000',
    },
  },

  wrapImg: {
  },

  itemImg: {
    width: '100%',
    boxSizing: 'border-box',
    cursor: 'pointer',
    '& img': {
      width: '100%',
    },
  },
});

export default function ChangeCombo({ handleChangeItem, changeTo }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.listChange}>
        {changeTo.map((item) => (
          <Box key={item.pk} className={classes.itemChange}>
            <Box
              className={classes.wrapImg}
              onClick={() => handleChangeItem(item, changeTo)}
            >
              <Box className={classes.itemImg}>
                <img src={item.image} alt="" />
              </Box>
            </Box>
            <span>{item.name}</span>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
