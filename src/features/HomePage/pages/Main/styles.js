import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {},

  body: {
    marginTop: '20px',
    '& > span': {
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: '22px',
    },
  },

  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '250px',
  },

  category: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '22px',
  },

  item: {
    width: '87px',
    height: '106px',
    borderRadius: 10,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: 700,
    color: '#000',
    textDecoration: 'none',
    boxShadow: '4px 4px 4px rgba(255, 128, 1, 0.25), -2px -2px 4px rgba(208, 208, 208, 0.15)',

    '&.active': {
      backgroundColor: '#FF8000',
      color: '#fff',
    },

    '& span': {
      marginTop: '6px',
    },
  },

  circle: {
    width: '33px',
    height: '33px',
    borderRadius: '50%',
    marginTop: '12px',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      width: '100%',
      height: '100%',
      fill: '#ff8000',
    },
  },

  arrow: {
    marginTop: '12px',
    borderRadius: '20px',
  },
});

export { useStyles };
