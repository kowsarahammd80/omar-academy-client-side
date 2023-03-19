import React from 'react';
import { Link } from 'react-router-dom';

const BooksStoreMap = ({booksData}) => {

  const {_id, booksImage, booksName, price} = booksData

  return (

       <div className='m-5 shadow-xl'>

          <img src={booksImage} alt="" className="" />

          <p className="text-center text-2xl font-semibold mt-3">{booksName}</p>

          <p className="text-center text-xl font-semibold mt-1">{price} Taka</p>

          <div className='text-center mb-2 mt-3'>

             <Link to= "/booksDetails">

               <button className=' bg-blue-200 p-2 rounded-xl font-semibold'>See details</button>

             </Link>

          </div>

       </div>

  );

};

export default BooksStoreMap;