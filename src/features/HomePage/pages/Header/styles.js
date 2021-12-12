import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {},

  searchBox: {
    position: 'fixed',
    zIndex: 1,
    top: '27px',
    left: '30%',
    boxShadow:
      '4px 4px 4px rgba(255, 128, 1, 0.25), -2px -2px 4px rgba(208, 208, 208, 0.15)',
    '& svg': {
      marginLeft: '-25px',
      verticalAlign: 'middle',
    },
  },

  searchBtn: {
    height: '27px',
    width: '163px',
    border: 'none',
    outline: 'none',
    borderRadius: '45px',
    padding: '0 19px',
    boxSizing: 'border-box',
  },

  header__search: {
    position: 'sticky',
    top: '0px',
    right: '0',
    float: 'right',
  },
  header__input_search: {
    width: '250px',
    height: '40px',
    borderRadius: '20px',
    outline: 'none',
    border: '1px solid #fff',
    color: '#666',
    padding: '0 20px',
  },
  header__icon__search: {
    width: '17px',
    height: '17px',
    color: '#333',
    fontWeight: 500,
    position: 'relative',
    top: '-2px',
    left: '-40px',
  },
});

export { useStyles };
