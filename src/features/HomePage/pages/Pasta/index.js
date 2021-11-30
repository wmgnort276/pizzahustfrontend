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
});

export default function Pasta() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData(){
      const requestUrl = 'http://127.0.0.1:8000/side/?type=Noodle'
      const response = await fetch(requestUrl)
      const responseJSON = await response.json();
      console.log(responseJSON);
      setData(responseJSON);
    }
    
    getData();
  }, [])

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
