import { makeStyles } from '@mui/styles';
import Item from 'features/HomePage/components/Item';
import React, { useEffect, useState } from 'react';
// import Data from 'API/Category/Pizza';
const useStyles = makeStyles({
  root: {
    marginTop: '100px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gridGap: '20px',
  },
});
// console.log(getData());

export default function Pizza() {
  const classes = useStyles();
  // API
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const requestUrl = 'http://127.0.0.1:8000/piza/?size=S';
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      console.log(responseJSON);
      setData(responseJSON);
    }

    getData();
  }, []);

  return (
    <div className={classes.root}>
      {data.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
