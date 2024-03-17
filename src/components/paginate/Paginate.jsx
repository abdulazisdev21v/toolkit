import * as React from 'react';
import Pagination from '@mui/material/Pagination';

export default function Paginate({count,setPage}) {
    function handleChange(p,n){
        setPage(n)
    }
  return (
      <Pagination onChange={handleChange}  count={count} color="secondary" />
  );
}