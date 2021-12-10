import Item from 'features/HomePage/components/Item';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { v4 } from 'uuid';

const useStyles = makeStyles({
  root: {
    marginTop: '100px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gridGap: '20px',
    
  },
  button: {
    width: '100%',
    borderRadius: '20px',
    height: '20px',
    background: '#ff8000',
    fontSize: '12px',
  },
});

export default function Chips() {
  const classes = useStyles();
  // API
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData(){
      const requestUrl = 'http://127.0.0.1:8000/side/?type=Frenchfries'
      const response = await fetch(requestUrl)
      const responseJSON = await response.json();
      console.log(responseJSON);
      setData(responseJSON);
    }
    
    getData();
  }, [])
  //API

  return (
    <div className={classes.root}>
      {
      data.map((item) => (
        <Item key={item.id} item={item} />
      ))
      }
    </div>
  );
}


const pizzaList = [
  {
    id: v4(),
    srcImg: 'pizza.png',
    name: 'Pizza Hải Sản Đào',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
  {
    id: v4(),
    srcImg: 'pizza.png',
    name: 'Pizza Hải Sản Đào',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
  {
    id: v4(),
    srcImg: 'pizza.png',
    name: 'Pizza Hải Sản Đào 2',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
  {
    id: v4(),
    srcImg: 'pizza.png',
    name: 'Pizza Hải Sản Đào 2',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
  {
    id: v4(),
    srcImg: 'pizza.png',
    name: 'Pizza Hải Sản Đào 2',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
  {
    id: v4(),
    srcImg: 'pizza.png',
    name: 'Pizza Hải Sản Đào 3',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
  {
    id: v4(),
    srcImg: 'pizza.png',
    name: 'Pizza Hải Sản Đào',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
];
