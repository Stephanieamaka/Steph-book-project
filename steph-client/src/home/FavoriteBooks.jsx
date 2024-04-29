import React, { useState } from 'react'
import { useEffect } from 'react';

const FavoriteBooks = () => {
    const [books, setBooks] = useState([]);
    
    useEffect (() => {
        fetch("https://localhost:5000/all-books").then(res => res.json()).then(data => console.log(data))
    },[])
  return (
    <div>FavoriteBooks</div>
  )
}

export default FavoriteBooks