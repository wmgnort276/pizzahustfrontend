import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {},

  container: {
    marginLeft: '25px',
    cursor: 'default',
  },

  cart: {
    height: '100vh',
    padding: '77px 70px 28px 69px',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',

    '& > span': {
      fontSize: '18px',
      lineHeight: 22 / 18,
      fontWeight: 700,
      marginBottom: '10px',
    },
  },

  productList: {
    marginRight: '-20px',
    flex: 1,
    overflow: 'auto',

    /* width */
    '&::-webkit-scrollbar': {
      width: '5px',
      borderRadius: '10px',
    },

    /* Track */
    '&::-webkit-scrollbar-track': {
      background: '#fff2e0',
    },

    /* Handle */
    '&::-webkit-scrollbar-thumb': {
      background: '#ff8000',
      borderRadius: '10px',
    },
  },

  productItem: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    lineHeight: 5 / 4,
    fontWeight: 600,
    background: '#fff2e0',
    borderRadius: '100px 0 0 100px',

    '& img': {
      width: '120px',
    },

    '& p, span': {
      margin: '4px',
    },
  },

  itemInfo: {
    flex: 1,
  },

  quantity: {
    display: 'flex',
    alignItems: 'center',

    '& > div': {
      padding: '0 10px',
    },
  },

  price: {
    marginRight: '20px',
    fontWeight: 700,
  },

  // total: {
  //   position: 'relative',
  //   height: '58px',
  // },

  // product_price: {
  //   font_weight: 700,
  //   display: 'flex',
  // },
  
  // products_pay_price: {
  //   width: '40%',
  //   margin_left: 'auto',
  //   margin_bottom: '30px',
  //   margin_top: '10px',
  //   font_size: '14px',
  //   line_height: '20px',
  // },
  
  // products_total_price:{
  //   text_align: 'right',
  // },
  
  // products_total_price:{
  //   font_weight: 700,
  //   line_height: '25px',
  //   font_size: '18px',
  // },

});

export { useStyles };
