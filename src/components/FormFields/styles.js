import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    '& input::placeholder': {
      fontFamily: 'Montserrat',
      fontSize: '14px',
    },
    '& .MuiOutlinedInput-root': {
      // '&:hover fieldset': {
      //   borderColor: 'white',
      // },
      '&.Mui-focused fieldset': {
        borderColor: '#FF8000',
      },
    },
    '& .css-k4qjio-MuiFormHelperText-root.Mui-error': {
      position: 'absolute',
      color: '#FF8000',
      bottom: '-22px',
    },
  },
});

export default useStyles;
