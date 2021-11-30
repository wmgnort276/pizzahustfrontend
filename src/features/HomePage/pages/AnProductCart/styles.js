import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: '21px 28px 34px 32px',
    height: '100vh',

  },
  
  back:{
    cursor: 'pointer' ,
    
    '&:hover': {
      fill: '#ff8000',
    },
  },


  logo: {
    display: 'flex',
    alignItems: 'flex-end',
  },

  product: {
    display: 'flex',
    width: '100%',

    '& img': {
      width: '40%',
      height: 'auto',
    },

    '& p': {
      margin: '15px 0 0 10px',
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: 18 / 15,
    },
  },

  choose: {
    margin: '0 16px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    '& .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ff8000',
    },
    '& .css-1kty9di-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
      color: '#ff8000',
    },
  },

  toppingItem: {
    width: '65px',
    height: '66px',
    textAlign: 'center',
    display: 'inline-block',
    cursor: 'pointer',

    '& span': {
      display: 'block',
      fontSize: '12px',
      lineHeight: 14 / 12,
    },
  },
});

export { useStyles };
