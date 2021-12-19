import React from 'react';
import { useParams } from 'react-router-dom';

export default function Search() {
  const { search } = useParams();
  console.log(search.slice(15));

  return <div>{search && <div>Search</div>}</div>;
}
