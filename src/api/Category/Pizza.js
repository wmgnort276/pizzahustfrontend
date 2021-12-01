import { useEffect, useState } from 'react';

export default function Data() {
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
  console.log(data);
  return data;
}
