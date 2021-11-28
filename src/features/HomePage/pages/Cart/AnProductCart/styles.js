import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: '21px 28px 34px 32px',
    height: '100vh',
  },

  logo: {
    display: 'flex',
    alignItems: 'flex-end',
  },

  product: {
    display: 'flex',
    width: '100%',

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

    '& span': {
      fontWeight: 500,
      marginTop: '10px',
    },

    '& input::placeholder': {
      color: '#000',
      fontSize: '16px',
    },
  },

  select: {
    boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    marginBottom: '20px !important',
  },
});

export { useStyles };
